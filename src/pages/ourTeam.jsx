import React, { useEffect, useState } from "react";
import { ourTeamAPI } from "../services/ourTeamAPI";
import OurTeamComponent from "../components/ourTeam";

export default function OurTeamPage() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const fetchTeams = async () => {
    const result = await ourTeamAPI.fetchAll();
    setTeams(result);
  };

  const handleSave = async (data) => {
    if (selectedTeam) {
      await ourTeamAPI.update(selectedTeam.id, data);
    } else {
      await ourTeamAPI.create(data);
    }
    setSelectedTeam(null);
    fetchTeams();
  };

  const handleDelete = async (id) => {
    await ourTeamAPI.remove(id);
    fetchTeams();
  };

  const handleEdit = (team) => {
    setSelectedTeam(team);
  };

  const handleAdd = () => {
    setIsAdding(true);
    setSelectedTeam(null);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-yellow-700">Our Team</h1>
        <button
          onClick={handleAdd}
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl"
        >
          Tambah Anggota
        </button>
      </div>

      {(isAdding || selectedTeam) && (
        <OurTeamComponent
          data={selectedTeam}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onSave={handleSave}
          isAdding={isAdding}
          setIsAdding={setIsAdding}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.map((team) => (
          <OurTeamComponent
            key={team.id}
            data={team}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onSave={handleSave}
          />
        ))}
      </div>
    </div>
  );
}
