'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export default function TagFilter({ tags, selectedTags, onTagToggle }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagToggle('all')}
        className={cn(
          'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
          selectedTags.length === 0
            ? 'bg-primary-600 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        )}
      >
        All Projects
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagToggle(tag)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            selectedTags.includes(tag)
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
