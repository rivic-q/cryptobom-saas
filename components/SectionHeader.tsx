
import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>
    <p className="text-slate-500 mt-2 max-w-3xl leading-relaxed">{description}</p>
  </div>
);

export default SectionHeader;
