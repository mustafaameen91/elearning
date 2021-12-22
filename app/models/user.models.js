const CryptoJS = require("crypto-js");
const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const User = function (user) {
   this.userName = user.userName;
   this.password = user.password;
   this.phone = user.phone;
   this.provinceId = user.provinceId;
   this.roleId = user.roleId;
   this.canLogin = user.canLogin;
};

User.create = async (newUser, result) => {
   try {
      const user = await prismaInstance.user.create({
         data: newUser,
      });

      result(null, user);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

User.findById = async (userId, result) => {
   try {
      const singleUser = await prismaInstance.user.findUnique({
         where: {
            idUser: JSON.parse(userId),
         },
         select: {
            userName: true,
            provinceId: true,
            roleId: true,
            phone: true,
            province: true,
            role: true,
         },
      });

      if (singleUser) {
         result(null, singleUser);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found User with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

User.login = async (user, result) => {
   try {
      const loginUser = await prismaInstance.user.findUnique({
         where: {
            AND: [{ phone: user.phone }, { canLogin: true }],
         },
         include: {
            province: true,
            role: true,
            distributorInfo: true,
            teacherInfo: true,
            studentInfo: {
               include: {
                  class: true,
               },
            },
         },
      });

      if (loginUser) {
         if (
            CryptoJS.AES.decrypt(
               loginUser.password,
               process.env.SECRET_KEY
            ).toString(CryptoJS.enc.Utf8) === user.password
         ) {
            delete loginUser.password;
            const findUserSession = await prismaInstance.userSession.findMany();
            console.log(loginUser);
            result(null, loginUser);
         } else {
            result(
               {
                  error: "Not Found",
                  code: 404,
                  errorMessage: "Not Found User with this phone!!",
               },
               null
            );
         }
      } else {
         result(
            {
               error: "Not Found",
               code: 404,
               errorMessage: "Not Found User with this phone",
            },
            null
         );
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

User.getAllStudents = async (student, result) => {
   try {
      const users = await prismaInstance.user.findMany({
         where: {
            AND: [
               {
                  roleId: 2,
               },
               {
                  userName: {
                     contains: student.name,
                  },
               },
            ],
         },
         take: 10,
         select: {
            userName: true,
            provinceId: true,
            roleId: true,
            phone: true,
            province: true,
            role: true,
            password: true,
            studentInfo: true,
         },
      });

      result(null, users);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

User.getByPhoneNumber = async (phone, result) => {
   try {
      const findUserPhone = await prismaInstance.user.findMany({
         where: { phone: phone },
      });
      if (findUserPhone.length > 0) {
         result(null, findUserPhone[0]);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found User with this Id",
         });
      }
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

User.getAll = async (result) => {
   try {
      const users = await prismaInstance.user.findMany({
         select: {
            userName: true,
            provinceId: true,
            roleId: true,
            phone: true,
            province: true,
            role: true,
            password: true,
            canLogin: true,
         },
      });

      let usersWithoutPass = users.map((user) => {
         return {
            userName: user.userName,
            provinceId: user.provinceId,
            roleId: user.roleId,
            phone: user.phone,
            password: CryptoJS.AES.decrypt(
               user.password,
               process.env.SECRET_KEY
            ).toString(CryptoJS.enc.Utf8),
         };
      });
      result(null, users);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

User.getByRoleId = async (roleId, result) => {
   try {
      const users = await prismaInstance.user.findMany({
         where: {
            roleId: JSON.parse(roleId),
         },
         select: {
            idUser: true,
            userName: true,
            provinceId: true,
            roleId: true,
            phone: true,
            province: true,
            role: true,
            canLogin: true,
            teacherInfo: true,
            studentInfo: true,
            distributorInfo: true,
            StudentCourse: true,
         },
      });

      result(null, users);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

User.updateById = async (userId, user, result) => {
   try {
      const updateUser = await prismaInstance.user.update({
         where: { idUser: JSON.parse(userId) },
         data: user,
      });
      result(null, updateUser);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

User.remove = async (id, result) => {
   try {
      const deleteUser = await prismaInstance.user.delete({
         where: { idUser: JSON.parse(id) },
      });
      result(null, deleteUser);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

User.removeAll = async (result) => {
   try {
      const deleteAllUser = await prismaInstance.user.deleteMany({});
      result(null, deleteAllUser);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = User;
