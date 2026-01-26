function About() {
  return (
    <div className="px-3">
      <h2 className="mt-3 text-2xl">
        <ul>
          {['HTML', 'CSS', 'JAVASCRIPT'].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </h2>
    </div>
  );
}

export default About;
