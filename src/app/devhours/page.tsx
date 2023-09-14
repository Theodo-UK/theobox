const DevHours = () => {
  return (
    <main className="flex min-h-screen flex-col  p-24 gap-5">
      <p className="font-normal text-xl">
        ❓ Why do we assume there are 7 dev hours in a day?
      </p>
      <p className="font-normal text-xl">
        💼 Theodo UK work from 9:30 to 18:00, which is 8.5 hours in total
      </p>
      <p className="font-normal text-xl">
        🥗 We then remove 1.5 hours for lunch and progression time
      </p>
      <p className="font-normal text-xl">
        👩‍✈️ All other non-ticket work (meetings, problem solving, kaizens etc.)
        is accounted for in the team speed
      </p>
      <p className="font-normal text-xl">
        💪 We do this to keep things simpler for clients and separating project
        and non-project work
      </p>
    </main>
  );
};

export default DevHours;
