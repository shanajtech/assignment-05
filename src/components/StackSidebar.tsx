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

interface StackSidebarProps {
  selectedTechnologies: Technology[];
  handleRemoveTechnology: (technology: Technology) => void;
  handleRemoveAll: () => void;
}

const StackSidebar = ({
  selectedTechnologies,
  handleRemoveTechnology,
  handleRemoveAll,
}: StackSidebarProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 lg:sticky lg:top-[90px]">
      <h3 className="text-[18px] font-bold text-[#0F172A]">
        Your Stack
      </h3>

      <p className="mt-1 text-[12px] text-[#64748B]">
        {selectedTechnologies.length} Technology Selected
      </p>

      {selectedTechnologies.length === 0 ? (
        <div className="mt-5 rounded-lg border border-dashed border-gray-300 p-6 text-center">
          <p className="text-[12px] text-[#94A3B8]">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-lg border border-gray-200 p-3"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8"
              />

              <div className="min-w-0 flex-1">
                <h4 className="text-[13px] font-semibold text-[#0F172A]">
                  {technology.name}
                </h4>

                <p className="text-[10px] text-[#64748B]">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => handleRemoveTechnology(technology)}
                className="text-[16px] font-bold text-red-500"
              >
                ×
              </button>
            </div>
          ))}

          <button
            onClick={handleRemoveAll}
            className="w-full rounded-md border border-red-300 py-2 text-[12px] font-medium text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default StackSidebar;