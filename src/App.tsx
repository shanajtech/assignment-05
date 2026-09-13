import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";

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

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const handleAddTechnology = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("Technology already added!");
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);

    toast.success(`${technology.name} added to stack`);
  };

  const handleRemoveTechnology = (technology: Technology) => {
    const remainingTechnologies = selectedTechnologies.filter(
      (item) => item.id !== technology.id
    );

    setSelectedTechnologies(remainingTechnologies);

    toast.info(`${technology.name} removed`);
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {loading ? (
          <div className="flex min-h-[250px] items-center justify-center">
            <span className="loading loading-spinner loading-lg text-[#D81B7E]"></span>
          </div>
        ) : (
          <Technologies
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            handleAddTechnology={handleAddTechnology}
            handleRemoveTechnology={handleRemoveTechnology}
            handleRemoveAll={handleRemoveAll}
          />
        )}
      </main>

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  );
}

export default App;