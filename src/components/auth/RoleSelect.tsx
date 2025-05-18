
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useState } from 'react';

export type Role = 'engineer' | 'manager' | 'executive';

type RoleOption = {
  id: Role;
  title: string;
  description: string;
};

interface RoleSelectProps {
  selectedRole: Role | null;
  onRoleSelect: (role: Role) => void;
}

const RoleSelect = ({ selectedRole, onRoleSelect }: RoleSelectProps) => {
  const roleOptions: RoleOption[] = [
    {
      id: 'engineer',
      title: 'Engineer',
      description: 'Access to fusion reactor controls, technical parameters, and maintenance systems.'
    },
    {
      id: 'manager',
      title: 'Labor Manager',
      description: 'Manage tasks, monitor energy usage, and optimize labor distribution across systems.'
    },
    {
      id: 'executive',
      title: 'Executive',
      description: 'View high-level reports, market analytics, and organizational performance metrics.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {roleOptions.map((role) => (
        <Card 
          key={role.id}
          className={`cursor-pointer transition-all ${
            selectedRole === role.id
              ? 'border-electric-blue shadow-md shadow-electric-blue/20'
              : 'border-border hover:border-electric-blue/50'
          }`}
          onClick={() => onRoleSelect(role.id)}
        >
          <CardHeader className="relative pb-2">
            <CardTitle className="text-lg">{role.title}</CardTitle>
            {selectedRole === role.id && (
              <div className="absolute top-4 right-4 bg-electric-blue rounded-full p-1">
                <Check className="h-4 w-4 text-black" />
              </div>
            )}
          </CardHeader>
          <CardContent>
            <CardDescription>{role.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RoleSelect;
