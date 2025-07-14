import prisma from "../config/prisma.config.js";


const categoriesService = {}

categoriesService.getAllCategory = async (options = {}) => {
  const whereClause = {};
  const categories = await prisma.category.findMany({
    where: whereClause, 
    select: {
      id: true,
      name: true,
    
    },
    orderBy: {
      name: "asc", 
    },
  });

  return categories;
};


export default categoriesService