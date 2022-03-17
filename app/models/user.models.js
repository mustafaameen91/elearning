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
   this.canLogin = true;
   this.countryCode = user.countryCode;
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
            teacherInfo: true,
            studentInfo: true,
            distributorInfo: true,
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
      const loginUser = await prismaInstance.user.findMany({
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
      console.log(loginUser);

      if (loginUser.length > 0) {
         console.log(
            CryptoJS.AES.decrypt(
               loginUser[0].password,
               process.env.SECRET_KEY
            ).toString(CryptoJS.enc.Utf8)
         );

         console.log(
            CryptoJS.AES.decrypt(
               loginUser[0].password,
               process.env.SECRET_KEY
            ).toString(CryptoJS.enc.Utf8)
         );
         if (
            CryptoJS.AES.decrypt(
               loginUser[0].password,
               process.env.SECRET_KEY
            ).toString(CryptoJS.enc.Utf8) === user.password
         ) {
            delete loginUser[0].password;
            if (loginUser[0].roleId == 2) {
               const findUserSession =
                  await prismaInstance.userSession.findMany({
                     where: { studentId: loginUser[0].idUser },
                  });
               if (findUserSession.length != 3) {
                  const findWithPlayerId =
                     await prismaInstance.userSession.findUnique({
                        where: {
                           deviceId: user.playerId,
                        },
                     });
                  if (findWithPlayerId) {
                     const updateStudent = await prismaInstance.user.update({
                        where: {
                           idUser: loginUser[0].idUser,
                        },
                        data: { playerId: user.playerId, canLogin: false },
                     });
                     console.log(updateStudent);
                     result(null, loginUser[0]);
                  } else {
                     const addDeviceId =
                        await prismaInstance.userSession.create({
                           data: {
                              studentId: loginUser[0].idUser,
                              deviceId: user.playerId,
                           },
                        });
                     const updateStudent = await prismaInstance.user.update({
                        where: {
                           idUser: loginUser[0].idUser,
                        },
                        data: { playerId: user.playerId, canLogin: false },
                     });
                     console.log(addDeviceId);
                     result(null, loginUser[0]);
                  }
               } else {
                  const findAdmin = await prismaInstance.user.findMany({
                     where: {
                        roleId: 1,
                     },
                  });
                  let adminDetails = findAdmin[0];
                  result(
                     {
                        error: "Too many Logins",
                        code: 405,
                        errorMessage: "Too many Logins with this phone!!",
                        phone: adminDetails.phone,
                     },
                     null
                  );
               }
            } else if (
               loginUser[0].roleId == 3 ||
               loginUser[0].roleId == 4 ||
               loginUser[0].roleId == 6
            ) {
               const updateUser = await prismaInstance.user.update({
                  where: {
                     idUser: loginUser[0].idUser,
                  },
                  data: {
                     playerId: user.playerId,
                  },
               });
               console.log(updateUser);
               result(null, loginUser[0]);
            } else {
               result(null, loginUser[0]);
            }
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
         const loginUserFalse = await prismaInstance.user.findMany({
            where: {
               AND: [{ phone: user.phone }, { canLogin: false }],
            },
         });
         if (loginUserFalse.length > 0) {
            const findAdmin = await prismaInstance.user.findMany({
               where: {
                  roleId: 1,
               },
            });
            let adminDetails = findAdmin[0];
            result(
               {
                  error: "Too many Logins",
                  code: 405,
                  errorMessage: "Too many Logins with this phone!!",
                  phone: adminDetails.phone,
               },
               null
            );
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
            idUser: true,
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

User.logoutStudent = async (userId, result) => {
   try {
      console.log("user to be logout", userId);
      const updateUser = await prismaInstance.user.update({
         where: { idUser: parseInt(userId.userId) },
         data: { canLogin: true },
      });
      console.log(updateUser);
      result(null, updateUser);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

User.updatePasswordById = async (phone, password, result) => {
   try {
      const updateUser = await prismaInstance.user.update({
         where: { phone: phone },
         data: { password: password },
      });

      result(null, updateUser);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

User.updateById = async (userId, user, result) => {
   try {
      const findUser = await prismaInstance.user.findUnique({
         where: {
            idUser: parseInt(userId),
         },
      });
      console.log("user------------", user);
      if (findUser.roleId == 2 && user.canLogin == true) {
         const updateUser = await prismaInstance.user.update({
            where: { idUser: JSON.parse(userId) },
            data: user,
         });
         console.log("updateUser------------", updateUser);
         const deleteMany = await prismaInstance.userSession.deleteMany({
            where: {
               studentId: parseInt(userId),
            },
         });
         console.log(deleteMany);
         console.log(user);
         result(null, updateUser);
      } else {
         const updateUser = await prismaInstance.user.update({
            where: { idUser: JSON.parse(userId) },
            data: user,
         });
         result(null, updateUser);
      }
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
