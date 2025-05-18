
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthForm from '@/components/auth/AuthForm';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space to-black">
      <Navbar />
      <div className="container mx-auto py-24 px-4">
        <div className="glass-effect rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Create Your Account</h1>
            <p className="text-white/70 mt-2">Join AEQUILUX and help build a sustainable future</p>
          </div>
          
          <div className="flex flex-col items-center">
            <AuthForm type="signup" />
            
            <div className="mt-6 text-center text-white/70">
              <p>
                Already have an account?{' '}
                <Link to="/login" className="text-electric-blue hover:underline">
                  Sign in
                </Link>
              </p>
              <p className="mt-4 text-sm">
                By creating an account, you agree to our{' '}
                <Link to="/terms" className="text-electric-blue hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-electric-blue hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
