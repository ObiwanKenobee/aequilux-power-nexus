
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';

interface HeaderProps {
  role: 'engineer' | 'manager' | 'executive';
  title: string;
}

const Header = ({ role, title }: HeaderProps) => {
  const navigate = useNavigate();
  
  // Names based on roles
  const userNames = {
    engineer: 'Alex Morgan',
    manager: 'Jamie Chen',
    executive: 'Sam Taylor',
  };
  
  const currentUser = userNames[role];
  
  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };
  
  const handleLogout = () => {
    navigate('/login');
  };
  
  return (
    <header className="glass-effect sticky top-0 z-10 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-white/70" />
                <span className="absolute -top-1 -right-1 bg-electric-blue text-deep-space text-xs flex items-center justify-center rounded-full h-5 w-5">3</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span className="font-medium">System Update</span>
                  <span className="text-xs text-muted-foreground">Maintenance scheduled for 2:00 AM</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Reactor Status</span>
                  <span className="text-xs text-muted-foreground">Output efficiency increased by 3.5%</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span className="font-medium">New Report Available</span>
                  <span className="text-xs text-muted-foreground">April energy utilization report is ready</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-electric-blue text-deep-space">{getInitials(currentUser)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{currentUser}</p>
                  <p className="text-xs leading-none text-muted-foreground">{role}@aequilux.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
