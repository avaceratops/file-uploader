const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getUserByUsername(username) {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
}

module.exports = {
  getUserByUsername,
};
