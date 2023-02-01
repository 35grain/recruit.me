import { Container } from "@nextui-org/react";
import { JobCard } from "@/components/JobCard";
import { useState } from "react";
import { Select } from "./Select";
import jobs from "@/other/jobs.json";

export const JobList = () => {
  const [selectedCompany, setSelectedCompany] = useState(["Company"]);
  const [selectedRegion, setSelectedRegion] = useState(["Region"]);

  let companies = Array.from(new Set(jobs.map((job) => job.company)));
  let regions = Array.from(new Set(jobs.map((job) => job.region)));

  companies.sort();
  regions.sort();

  companies = ["Company", ...companies];
  regions = ["Region", ...regions];

  return (
    <Container>
      <Container
        css={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          margin: "50px 0",
        }}
      >
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
      </Container>

      <Container
        css={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          margin: "50px 0",
        }}
      >
        {jobs
          .filter((job) => {
            return (
              ("Region" === selectedRegion[0] ||
                job.region === selectedRegion[0]) &&
              ("Company" === selectedCompany[0] ||
                job.company === selectedCompany[0])
            );
          })
          .map((job) => {
            return <JobCard key={job.title} job={job} />;
          })}
      </Container>
    </Container>
  );
};
