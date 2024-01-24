"use server"

import { CreateCategoryParams } from "@/types"
import { handleError } from "../utils"
import {  connectTodb } from "../database"
import Category from "../database/models/category.model"

export const createCategory = async ({ categoryName }: CreateCategoryParams) => {
  try {
   
    await connectTodb()
console.log("hi ji hi")
    const newCategory = await Category.create({ name: categoryName });
    await newCategory.save();

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error)
  }
}

export const getAllCategories = async () => {
  try {
    await connectTodb()

    const categories = await Category.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error)
  }
}