"use client";

import { Job, tagColorMap } from "@/lib/Jobs";

interface JobDetailProps {
  job: Job;
  isMobile: boolean;
  onBack: () => void;
  onApply: (title: string) => void;
}

export default function JobDetail({
  job,
  isMobile,
  onBack,
  onApply,
}: JobDetailProps) {
  const color = tagColorMap[job.tag] || "#297c3b";

  return (
    <div
      className="lg:w-7/12 rounded-2xl p-8 md:p-10 border"
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--card-border)",
        minHeight: 480,
      }}
    >
      {isMobile && (
        <button
          onClick={onBack}
          className="mb-4 text-sm opacity-70 hover:opacity-100 transition-opacity"
        >
          ← Back to jobs
        </button>
      )}

      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <p className={`tag ${job.tag} mb-3`}>{job.dept}</p>
          <h2 className="font-syne text-2xl md:text-3xl font-semibold">
            {job.title}
          </h2>
        </div>
        <span className="badge-full">{job.type}</span>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-4 mb-7 text-sm text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1.5">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {job.location}
        </span>
        <span className="flex items-center gap-1.5">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <rect x={2} y={7} width={20} height={14} rx={2} />
            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
          </svg>
          {job.experience}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
        {job.description}
      </p>

      {/* Responsibilities */}
      <div className="mb-6">
        <h4 className="font-syne font-bold mb-3 text-base">
          What you&apos;ll do
        </h4>
        <ul className="space-y-2">
          {job.responsibilities.map((r, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300"
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: color }}
              />
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mb-8">
        <h4 className="font-syne font-bold mb-3 text-base">
          What we&apos;re looking for
        </h4>
        <ul className="space-y-2">
          {job.requirements.map((r, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300"
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: color }}
              />
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* Apply CTA */}
      <button
        onClick={() => onApply(job.title)}
        className="inline-block px-7 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
        style={{
          background: "var(--text-gradient)",
          boxShadow: "0 6px 24px rgba(99,193,116,0.3)",
        }}
      >
        Apply for this role →
      </button>
    </div>
  );
}
