export default (sequelize, DataTypes) => {
  const Rol = ('Rol', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
  return Rol;
};
