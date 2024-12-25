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
    <div className="w-full max-w-5xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Explore Categories</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {categories.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onSelectCategory(id)}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-blue-100"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
              <Icon className="w-8 h-8 text-blue-600" />
            </div>
            <span className="text-gray-800 font-semibold text-lg">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
