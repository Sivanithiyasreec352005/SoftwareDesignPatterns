import { Button } from '@/components/ui/button'
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Our Service</h1>
        <p className="text-lg text-gray-700 mb-8">
          We offer the best services to help you grow. Join us and start your journey towards success.
        </p>
        {/* <Button type="submit" className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg">
          Get Started
        </Button> */}
      </div>
    </div>
  )
}

export default Home
