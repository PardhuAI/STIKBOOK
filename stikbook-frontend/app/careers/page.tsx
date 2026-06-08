"use client";

import ApplyModal from "@/components/sections/Careers/Applymodal";
import CareersHero from "@/components/sections/Careers/Careershero";
import OpenRoles from "@/components/sections/Careers/Openroles";
import WhyStikbook from "@/components/sections/Careers/WhyStikbook";
import { useState } from "react";

export default function CareersPage() {
  const [applyRole, setApplyRole] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <CareersHero />

      {/* Open Roles */}
      <OpenRoles onApply={(role) => setApplyRole(role)} />

      {/* Apply Modal */}
      {applyRole && (
        <ApplyModal role={applyRole} onClose={() => setApplyRole(null)} />
      )}

      <WhyStikbook />
    </>
  );
}
