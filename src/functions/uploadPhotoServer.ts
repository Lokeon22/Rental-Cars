"use server";
import { redirect } from "next/navigation";

export async function uploadPhoto() {
  redirect("/home");
}
