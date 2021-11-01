import Job from "./Job";

const Jobs = (props) => {
  return (
    <div className="jobs">
      <Job className="red" jobName="Full Time Sales Associate - Sydney Boutique" contractType="CDI" country="Australie" city="Sidney" />
      <Job className="green" jobName="Agent de Sécurité - Pantin" contractType="CDI" country="France" city="Pantin" />
      <Job className="yellow" jobName="Responsable d'Atelier (H/F)" contractType="CDD" country="France" city="Paris" />
      <Job className="blue" jobName="Chef de Projets" contractType="CDD" country="France" city="Paris" />
      <Job className="pink" jobName="Développeur React.js" contractType="CDI" country="France" city="Paris" />
      <Job className="red" jobName="Sales Associates Stockholm" contractType="CDI" country="Suède" city="Stockholm" />
      <Job className="green" jobName="Vendeur/se - Crans Montana" contractType="CDI" country="Suisse" city="Crans-Montana" />
      <Job className="yellow" jobName="CRM &amp; Data Quality Analyst" contractType="CDI" country="USA" city="New-York" />
      <Job className="blue" jobName="Infirmer (H/F)" contractType="CDI" country="France" city="Pantin" />
    </div>
  );
};

export default Jobs;
