"use client";

import { useState, useEffect } from "react";
import JobDetail from "./Jobdetail";
import JobListItem from "./Joblistitem";
import Pagination from "./Pagination";
import { jobs } from "@/lib/Jobs";

const ITEMS_PER_PAGE = 10;

interface OpenRolesProps {
  onApply: (role: string) => void;
}

export default function OpenRoles({ onApply }: OpenRolesProps) {
  const [activeId, setActiveId] = useState(jobs[0].id);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const paginatedJobs = jobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const activeJob = jobs.find((j) => j.id === activeId) ?? jobs[0];

  const handleJobClick = (id: number) => {
    setActiveId(id);
    if (isMobile) setShowDetail(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const firstJob = jobs[(page - 1) * ITEMS_PER_PAGE];
    setActiveId(firstJob.id);
  };

  const handleBack = () => setShowDetail(false);

  return (
    <section id="open-roles" className="reveal section-soft py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="chip mx-auto mb-4">Open Positions</div>
          <h2 className="font-syne text-3xl md:text-4xl mb-3">
            Find your role.
          </h2>
          <p className="opacity-80 mb-6">
            We hire for potential and passion, not just pedigree. Browse what
            we&apos;re building toward.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT — Job Detail Panel */}
          {(!isMobile || showDetail) && (
            <JobDetail
              job={activeJob}
              isMobile={isMobile}
              onBack={handleBack}
              onApply={onApply}
            />
          )}

          {/* RIGHT — Job List + Pagination */}
          {(!isMobile || !showDetail) && (
            <div className="lg:w-5/12 flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                {paginatedJobs.map((job) => (
                  <JobListItem
                    key={job.id}
                    job={job}
                    isActive={job.id === activeId}
                    onClick={() => handleJobClick(job.id)}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
