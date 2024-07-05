'use server'
import sql from 'better-sqlite3';
import { revalidatePath } from "next/cache";

let db = sql('meals.db');

const getMeals = async (): Promise<IMeal[]> => {
    return db.prepare('select * from meals').all() as IMeal[];
}

const addMeal = async (formData: FormData): Promise<void> => {
    const slug = formData.get('slug') as string;
    const title = formData.get('title') as string;
    const image = formData.get('image') as string;
    const summary = formData.get('summary') as string;
    const instructions = formData.get('instructions') as string;
    const creator = formData.get('creator') as string;
    const creator_email = formData.get('creator_email') as string;

    db.prepare(`INSERT INTO meals(slug, title, image, summary, instructions, creator, creator_email)
                VALUES (?, ?, ?, ?, ?, ?, ?)`)
        .run(slug, title, image, summary, instructions, creator, creator_email);

    revalidatePath('/meals');
}

export {
    getMeals,
    addMeal
}
