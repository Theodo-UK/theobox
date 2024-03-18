const DevHours = () => {
  return (
    <main className="flex flex-col pt-20 px-10 gap-5 h-screen">
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
        👩‍✈️ All other work (meetings, problem solving, kaizens etc.) is accounted
        for in the team speed
      </p>
      <p className="font-normal text-xl">
        💪 We do this to keep things simpler by more clearly separating the
        categories of time spent
      </p>
    </main>
  );
};

export default DevHours;
