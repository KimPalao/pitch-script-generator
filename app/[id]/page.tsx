import { sql } from "@vercel/postgres";
import Pitch from "../ui/pitch/pitch";

export default async function Page({ params }: { params: { id: string; }; }) {
  const id = params.id;

  const getPitchById = async (id: string) => {
    try {
      const data = await sql<Pitch>`SELECT * FROM pitches WHERE id = ${id}`;
      return data.rows[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch pitch.');
    }
  };

  const pitch = await getPitchById(id);
  const pitchJson = JSON.parse(pitch.response);

  return (
    <Pitch pitch={pitchJson} pitchId={id} />
  );
}