import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clipboard } from 'lucide-react';

const UserTest = () => {
    const [message, setMessage] = useState('');
    const [testTitle, setTestTitle] = useState('Sample Test Title');
    const [completedTests, setCompletedTests] = useState(['Test 1', 'Test 2']); // Example completed tests

    const handleCardClick = () => {
        setMessage('Test Started');
        setCompletedTests([...completedTests, testTitle]); // Add the current test to the history
    };

    return (
        <div className="flex flex-col p-4 gap-4">
            <div className="flex flex-col gap-2 mb-4">
                <h1 className="text-3xl font-bold text-primary mb-2">User Test Dashboard</h1>
                <p className="text-lg text-muted-foreground">Click on the card to start the test.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Card className='border border-primary hover:shadow-lg transition-shadow cursor-pointer' onClick={handleCardClick}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{testTitle}</CardTitle>
                        <Clipboard className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <p className="px-4 py-2 bg-primary text-white rounded w-full">Click to Start</p>
                    </CardContent>
                </Card>
            </div>
            {message && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
                    {message}
                </div>
            )}
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Completed Tests</h2>
                <ul className="list-disc pl-5">
                    {completedTests.map((test, index) => (
                        <li key={index} className="text-lg text-muted-foreground">{test}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserTest;
