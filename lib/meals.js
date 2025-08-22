import sql from "better-sqlite3";
import { NextRequest } from "next/server";
import { resolve } from "styled-jsx/css";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); //Extra delay made just for practice purposes

  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
