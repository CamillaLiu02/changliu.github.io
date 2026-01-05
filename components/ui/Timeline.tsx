'use client';

import { motion } from 'framer-motion';

interface TimelineItemProps {
  date: string;
  title: string;
  organization: string;
  description: string;
  isLast?: boolean;
  tags?: string[];
}

export default function TimelineItem({
  date,
  title,
  organization,
  description,
  isLast = false,
  tags = [],
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-[7px] top-6 w-0.5 h-full bg-gray-200" />
      )}

      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow-md"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      >
        <p className="text-sm font-medium text-primary-600 mb-1">{date}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-md font-medium text-gray-700 mb-2">{organization}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold text-primary-700 bg-primary-50 border border-primary-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-gray-600 text-sm">{description}</p>
      </motion.div>
    </div>
  );
}
