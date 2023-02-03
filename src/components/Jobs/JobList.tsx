import { Container, Text, Input } from "@nextui-org/react";
import { JobCard } from "@/components/Jobs/JobCard";
import { useState, useEffect } from "react";
import { Select } from "./Select";
import jobs from "@/other/jobs.json";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const JobList = () => {
  const [selectedCompany, setSelectedCompany] = useState(["Company"]);
  const [selectedRegion, setSelectedRegion] = useState(["Region"]);
  const [selectedRole, setSelectedRole] = useState(["Role"]);
  const [selectedSalary, setSelectedSalary] = useState("");

  let companies = Array.from(new Set(jobs.map((job) => job.company)));
  let regions = Array.from(new Set(jobs.map((job) => job.region)));
  let roles = Array.from(new Set(jobs.map((job) => job.role)));

  jobs.sort((a, b) => {
    if (a.replyTime > b.replyTime) {
      return 1;
    } else if (a.replyTime < b.replyTime) {
      return -1;
    }
    return 0;
  });

  companies.sort();
  regions.sort();
  roles.sort();

  companies = ["Company", ...companies];
  regions = ["Region", ...regions];
  roles = ["Role", ...roles];

  return (
    <Container>
      <Text h2>Sounds like your future?</Text>
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <Input
          type="number"
          labelPlaceholder="Salary from"
          onChange={(e) => {
            setSelectedSalary(e.currentTarget.value);
          }}
        />
        <Select
          selected={selectedRole}
          setSelected={setSelectedRole}
          menuItems={roles}
        />
        <Select
          selected={selectedCompany}
          setSelected={setSelectedCompany}
          menuItems={companies}
        />
        <Select
          selected={selectedRegion}
          setSelected={setSelectedRegion}
          menuItems={regions}
        />
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry
          gutter="22px"
          style={{
            marginTop: "20px",
          }}
        >
          {jobs
            .filter((job) => {
              return (
                ("Region" === selectedRegion[0] ||
                  job.region === selectedRegion[0]) &&
                ("Company" === selectedCompany[0] ||
                  job.company === selectedCompany[0]) &&
                ("Role" === selectedRole[0] || job.role === selectedRole[0]) &&
                (!selectedSalary || job.salaryStart >= parseInt(selectedSalary))
              );
            })
            .map((job) => {
              return <JobCard key={job.title} job={job} />;
            })}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
};
