import mongoose from 'mongoose';

export const connect = async () => {
  await mongoose.connect('mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority')
};

export {
  mongoose
};