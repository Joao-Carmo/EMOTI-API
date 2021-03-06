module.exports = (sequelize, DataTypes) => {
    const Tutor = sequelize.define('tutor', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: { notNull: { msg: 'USERNAME!' } }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: 'NAME!' } }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { message: 'EMAIL!' } 
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { message: 'PASSWORD!' } 
            }
        },
        gender: {
            type: DataTypes.ENUM('male', 'female'),
            allowNull: false,
            validate: {
                notNull: { message: 'GENDER!' } 
            }
        },
        image: {
            type: DataTypes.STRING
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { message: 'BOD!' } 
            }
        },
        
    },
    {
        timestamps: false
    })
    return Tutor;
};