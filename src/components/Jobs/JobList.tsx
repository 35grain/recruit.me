import { Container, Text } from "@nextui-org/react";
import { JobCard } from "@/components/Jobs/JobCard";
import { useState } from "react";
import { Select } from "./Select";
import jobs from "@/other/jobs.json";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const JobList = () => {
  const [selectedCompany, setSelectedCompany] = useState(["Company"]);
  const [selectedRegion, setSelectedRegion] = useState(["Region"]);

  let companies = Array.from(new Set(jobs.map((job) => job.company)));
  let regions = Array.from(new Set(jobs.map((job) => job.region)));

  jobs.sort((a, b) => {
    if (a.replyTime > b.replyTime) {
      return 1;
    }
    else {
      return 0;
    }
  });
  companies.sort();
  regions.sort();

  companies = ["Company", ...companies];
  regions = ["Region", ...regions];

  return (
    <Container>
      <Text h2>Your dream career awaits!</Text>
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
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
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="22px" style={{
          marginTop: "20px"
        }}>
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
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
};
