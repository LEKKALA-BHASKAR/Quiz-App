import React from 'react';
import { Code2, Coffee, Braces, Blocks, Laptop, FileCode, Binary } from 'lucide-react';

interface CategorySelectorProps {
  onSelectCategory: (category: string) => void;
}

export function CategorySelector({ onSelectCategory }: CategorySelectorProps) {
  const categories = [
    { id: 'all', name: 'All Topics', icon: Blocks },
    { id: 'python', name: 'Python', icon: Braces },
    { id: 'java', name: 'Java', icon: Coffee },
    { id: 'javascript', name: 'JavaScript', icon: Code2 },
    { id: 'react', name: 'React', icon: Binary },
    { id: 'typescript', name: 'TypeScript', icon: FileCode },
    { id: 'general', name: 'General', icon: Laptop }
  ];

  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Select a Category</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onSelectCategory(id)}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <Icon className="w-8 h-8 mb-3 text-blue-600" />
            <span className="text-gray-800 font-medium">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}