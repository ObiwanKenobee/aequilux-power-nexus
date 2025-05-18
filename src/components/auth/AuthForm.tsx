
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import RoleSelect, { Role } from '@/components/auth/RoleSelect';

interface AuthFormProps {
  type: 'login' | 'signup';
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (type === 'signup' && password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    if (type === 'signup' && !selectedRole) {
      toast({
        title: "Role selection required",
        description: "Please select your user role to continue.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsLoading(true);
      
      // Here you would normally connect to an authentication service
      // For now we'll just simulate a successful auth
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const dashboardPath = selectedRole ? `/${selectedRole}-dashboard` : '/';
      
      toast({
        title: type === 'login' ? "Logged in successfully!" : "Account created successfully!",
        description: "Welcome to the AEQUILUX platform.",
      });
      
      // Navigate to appropriate dashboard based on role
      if (type === 'login') {
        // For demo purposes, we'll let any login go to the engineer dashboard
        navigate('/engineer-dashboard');
      } else {
        navigate(dashboardPath);
      }
      
    } catch (error) {
      toast({
        title: "Authentication error",
        description: "There was a problem with authentication. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          required
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      {type === 'signup' && (
        <>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Select Your Role</Label>
            <RoleSelect 
              selectedRole={selectedRole}
              onRoleSelect={setSelectedRole}
            />
          </div>
        </>
      )}
      
      {type === 'login' && (
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="remember" 
            checked={rememberMe} 
            onCheckedChange={() => setRememberMe(!rememberMe)} 
          />
          <Label htmlFor="remember" className="text-sm cursor-pointer">Remember me</Label>
        </div>
      )}
      
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {type === 'login' ? 'Signing in...' : 'Creating account...'}
          </>
        ) : (
          <>{type === 'login' ? 'Sign In' : 'Create Account'}</>
        )}
      </Button>
    </form>
  );
};

export default AuthForm;
