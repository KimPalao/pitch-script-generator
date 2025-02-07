import { sql } from "@vercel/postgres";
import Pitch from "../ui/pitch/pitch";
import { PitchType } from "../lib/definition";

export default async function Page({ params }: { params: { id: string; }; }) {
  const id = params.id;
  const headers = ['Introduction', 'Hook', 'Problem Statement', 'Solution', 'Market Opportunity', 'Business Model', 'Traction', 'Go-to-Market Strategy', 'Team', 'Financials and Projections', 'Closing'];

  const getPitchById = async (id: string) => {
    try {
      const data = await sql<PitchType>`SELECT * FROM pitches WHERE id = ${id}`;
      return data.rows[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch pitch.');
    }
  };

  const pitch = await getPitchById(id);
  const pitchJson = JSON.parse(pitch.response);

  return (
    <Pitch pitch={pitchJson} pitchId={id} cards={headers} />
  );
}