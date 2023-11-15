/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Gravy', pet_type_id: 4 },
    {id: 2, name: 'Bags', pet_type_id: 3},
    {id: 3, name: 'Kitten', pet_type_id: 2},
    {id: 4, name: 'Regan&Nixon', pet_type_id: 1}
  ]);
};
