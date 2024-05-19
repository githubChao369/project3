
import httpInstance from "@/utils/http";

export function gteCategoryAPI () {
  return httpInstance({
    url: '/home/category/head'
  })
}