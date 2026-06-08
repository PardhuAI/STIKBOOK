"use client";

import { Job } from "@/lib/Jobs";

interface JobListItemProps {
  job: Job;
  isActive: boolean;
  onClick: () => void;
}

export default function JobListItem({
  job,
  isActive,
  onClick,
}: JobListItemProps) {
  return (
    <div
      className={`job-item rounded-xl px-5 py-4 cursor-pointer ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`tag ${job.tag} mb-2`}>{job.dept}</p>
          <p className="font-syne font-bold text-sm">{job.title}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {job.location}
          </p>
        </div>
        <span className="text-xs text-gray-400 whitespace-nowrap mt-1">
          {job.experience}
        </span>
      </div>
    </div>
  );
}
