import { Contact } from '@prisma/client';
import prisma from '../../../db/db.config';

const createContact = async (payload: Contact) => {
  const result = await prisma.contact.create({
    data: payload,
  });

  return result;
};

const getContact = async () => {
  const result = await prisma.contact.findMany();

  return result;
};

const getContactById = async (id: string) => {
  const result = await prisma.contact.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateContact = async (id: string, payload: Contact) => {
  const result = await prisma.contact.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteContact = async (id: string) => {
  const result = await prisma.contact.delete({
    where: {
      id,
    },
  });

  return result;
};

export const ContactService = {
  createContact,
  getContact,
  getContactById,
  updateContact,
  deleteContact,
};
