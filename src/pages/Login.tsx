
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthForm from '@/components/auth/AuthForm';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space to-black">
      <Navbar />
      <div className="container mx-auto py-24 px-4">
        <div className="glass-effect rounded-xl p-8 md:p-12 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            <p className="text-white/70 mt-2">Sign in to access your AEQUILUX dashboard</p>
          </div>
          
          <div className="flex flex-col items-center">
            <AuthForm type="login" />
            
            <div className="mt-6 text-center text-white/70">
              <p>
                Don't have an account?{' '}
                <Link to="/signup" className="text-electric-blue hover:underline">
                  Sign up
                </Link>
              </p>
              <Link to="/forgot-password" className="text-electric-blue hover:underline block mt-2">
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
