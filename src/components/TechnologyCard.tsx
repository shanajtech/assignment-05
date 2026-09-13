interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  handleAddTechnology: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  handleAddTechnology,
}: TechnologyCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-[11px] font-medium text-[#D81B7E]">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-[18px] font-semibold text-[#0F172A]">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-[60px] text-[12px] leading-5 text-[#64748B]">
        {technology.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px]">
        <span className="rounded bg-gray-100 px-2 py-1 text-[#475569]">
          {technology.category}
        </span>

        <span className="rounded bg-gray-50 px-2 py-1 text-[#64748B]">
          {technology.difficulty}
        </span>

        <span className="ml-auto font-medium text-[#475569]">
          <span className="text-yellow-500">★</span> {technology.rating}
        </span>
      </div>

      <button
        onClick={() => handleAddTechnology(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-md py-2.5 text-[12px] font-medium text-white ${
          isAdded
            ? "cursor-not-allowed bg-gray-400"
            : "bg-[#0F172A] hover:bg-[#D81B7E]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;