const Job = (props) => {
  return (
    <div className={props.className}>
      <p className="job-name">{props.jobName}</p>
      <p className="job-spec">
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};

export default Job;
