const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");
const notification = require("./../notifications/notification.js");

const StudentCourse = function (studentCourse) {
   this.studentId = studentCourse.studentId;
   this.courseId = studentCourse.courseId;
   this.statusId = studentCourse.statusId;
   this.distributorId = studentCourse.distributorId;
   this.discount = studentCourse.discount;
};

StudentCourse.create = async (newStudentCourse, result) => {
   try {
      const findStudentCourse = await prismaInstance.studentCourse.findMany({
         where: {
            AND: [
               {
                  studentId: newStudentCourse.studentId,
               },
               {
                  courseId: newStudentCourse.courseId,
               },
            ],
         },
      });
      if (findStudentCourse.length == 0) {
         const singleStudent = await prismaInstance.studentInfo.findMany({
            where: {
               idStudent: JSON.parse(newStudentCourse.studentId),
            },
            include: {
               user: true,
            },
         });

         const studentCourse = await prismaInstance.studentCourse.create({
            data: newStudentCourse,
         });
         if (singleStudent.length > 0) {
            let playerIds = singleStudent[0].user.playerId;
            let course = await prismaInstance.course.findUnique({
               where: {
                  idCourse: parseInt(studentCourse.courseId),
               },
            });
            var message = {
               app_id: "4295b0f7-9a63-4bb0-96ea-749e71e8c346",
               headings: { en: `تسجيل بكورس جديد` },
               contents: {
                  en: `مبروك تم تسجيلك بكورس    ${course.courseTitle}   ، بانتظار موافقة الاستاذ`,
               },
               include_player_ids: [playerIds],
            };
            notification(message);
         }

         result(null, studentCourse);
      } else {
         result({
            error: "conflict",
            code: 409,
            errorMessage: "Found StudentCourse with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.createWithPromo = async (studentCoursePromo, result) => {
   let studentCourseData = {
      studentId: studentCoursePromo.studentId,
      courseId: studentCoursePromo.courseId,
      statusId: 1,
      distributorId: studentCoursePromo.distributorId,
      discount: studentCoursePromo.discountAmount,
   };
   try {
      const findStudentCourse = await prismaInstance.studentCourse.findMany({
         where: {
            AND: [
               {
                  studentId: studentCourseData.studentId,
               },
               {
                  courseId: studentCourseData.courseId,
               },
            ],
         },
      });

      if (findStudentCourse.length == 0) {
         const singleStudent = await prismaInstance.studentInfo.findMany({
            where: {
               idStudent: JSON.parse(newStudentCourse.studentId),
            },
            include: {
               user: true,
            },
         });

         const studentCourse = await prismaInstance.studentCourse.create({
            data: studentCourseData,
         });

         if (singleStudent.length > 0) {
            let playerIds = singleStudent[0].user.playerId;
            let course = await prismaInstance.course.findUnique({
               where: {
                  idCourse: parseInt(studentCourse.courseId),
               },
            });
            var message = {
               app_id: "4295b0f7-9a63-4bb0-96ea-749e71e8c346",
               headings: { en: `تسجيل بكورس جديد` },
               contents: {
                  en: `مبروك تم تسجيلك بكورس    ${course.courseTitle}   ، بانتظار موافقة الاستاذ`,
               },
               include_player_ids: [playerIds],
            };
            notification(message);
         }

         const updatePromoCode = await prismaInstance.promoCode.update({
            where: {
               idPromoCode: parseInt(studentCoursePromo.promoCodeId),
            },
            data: {
               usedCount: {
                  decrement: 1,
               },
            },
         });
         console.log(updatePromoCode);
         const usedCode = await prismaInstance.usedCode.create({
            data: {
               promoId: parseInt(studentCoursePromo.promoCodeId),
               userId: parseInt(studentCoursePromo.studentUserId),
            },
         });

         result(null, { studentCourse, usedCode, updatePromoCode });
      } else {
         result({
            error: "conflict",
            code: 409,
            errorMessage: "Found StudentCourse with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.getByStudentId = async (courseId, studentId, result) => {
   try {
      const studentCourses = await prismaInstance.studentCourse.findMany({
         where: {
            studentId: parseInt(studentId),
            courseId: parseInt(courseId),
         },
      });
      result(null, studentCourses);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.findByIdStudentId = async (studentId, result) => {
   try {
      const singleStudentCourse = await prismaInstance.studentCourse.findMany({
         where: {
            AND: [
               {
                  student: {
                     userId: parseInt(studentId),
                  },
               },
               {
                  statusId: {
                     not: 1,
                  },
               },
            ],
         },
         include: {
            course: true,
            student: {
               include: {
                  user: true,
               },
            },
            status: true,
            distributor: true,
         },
      });
      result(null, singleStudentCourse);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.findById = async (studentCourseId, result) => {
   try {
      const singleStudentCourse = await prismaInstance.studentCourse.findUnique(
         {
            where: {
               idStudentCourse: JSON.parse(studentCourseId),
            },
         }
      );

      if (singleStudentCourse) {
         result(null, singleStudentCourse);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found StudentCourse with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.findByIdDistAndCourse = async (details, result) => {
   try {
      const singleStudentCourse = await prismaInstance.studentCourse.findMany({
         where: {
            AND: [
               {
                  courseId: details.courseId,
               },
               {
                  distributorId: details.distributorId,
               },
            ],
         },
         include: {
            course: true,
            status: true,
            student: {
               include: {
                  user: true,
               },
            },
            distributor: true,
         },
      });

      if (singleStudentCourse) {
         result(null, singleStudentCourse);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found StudentCourse with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.getAllByCourseIdForNotification = async (courseId, result) => {
   try {
      const studentCourses = await prismaInstance.studentCourse.findMany({
         where: {
            courseId: parseInt(courseId),
         },
         include: {
            course: {
               include: {
                  CourseDistributor: {
                     where: {
                        distributorStatus: "ACCEPTED",
                     },
                  },
               },
            },
            status: true,
            student: {
               include: {
                  user: {
                     include: {
                        StudentGroup: {
                           include: {
                              group: true,
                           },
                        },
                     },
                  },
               },
            },
            distributor: true,
         },
      });
      result(null, studentCourses);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.getAllByCourseId = async (courseId, result) => {
   try {
      const studentCourses = await prismaInstance.studentCourse.findMany({
         where: {
            courseId: parseInt(courseId),
         },
         include: {
            course: {
               include: {
                  CourseDistributor: {
                     where: {
                        distributorStatus: "ACCEPTED",
                     },
                  },
               },
            },
            status: true,
            student: {
               include: {
                  user: {
                     include: {
                        StudentGroup: {
                           include: {
                              group: true,
                           },
                        },
                     },
                  },
               },
            },
            distributor: true,
         },
      });
      result(null, studentCourses);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.getAll = async (result) => {
   try {
      const studentCourses = await prismaInstance.studentCourse.findMany();
      result(null, studentCourses);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.getForStudent = async (studentId, result) => {
   try {
      const studentCourses = await prismaInstance.studentCourse.findMany({
         where: {
            AND: [
               { studentId: JSON.parse(studentId) },
               { statusId: { not: 1 } },
            ],
         },
         include: { course: true },
      });

      result(null, studentCourses);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.getStudentCourses = async (studentId, result) => {
   try {
      const studentCourses = await prismaInstance.studentCourse.findMany({
         where: {
            studentId: JSON.parse(studentId),
            statusId: 1,
         },
      });

      result(null, {
         totalCourses: studentCourses.length,
         studentCourses: studentCourses,
      });
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.updateById = async (studentCourseId, studentCourse, result) => {
   try {
      const updateStudentCourse = await prismaInstance.studentCourse.update({
         where: { idStudentCourse: JSON.parse(studentCourseId) },
         data: studentCourse,
      });
      const singleStudent = await prismaInstance.studentInfo.findMany({
         where: {
            idStudent: JSON.parse(studentCourse.studentId),
         },
         include: {
            user: true,
         },
      });

      if (singleStudent.length > 0 && studentCourse.statusId == 2) {
         let playerIds = singleStudent[0].user.playerId;
         let course = await prismaInstance.course.findUnique({
            where: {
               idCourse: parseInt(studentCourse.courseId),
            },
         });
         var message = {
            app_id: "4295b0f7-9a63-4bb0-96ea-749e71e8c346",
            headings: { en: `راح تضمن المية` },
            contents: {
               en: `وافق الاستاذ على انضمامك لكورس ${course.courseTitle} ، هسة تكدر تشوف درسك`,
            },
            include_player_ids: [playerIds],
         };
         notification(message);
      }

      result(null, updateStudentCourse);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

StudentCourse.remove = async (id, result) => {
   try {
      const deleteStudentCourse = await prismaInstance.studentCourse.delete({
         where: { idStudentCourse: JSON.parse(id) },
      });
      result(null, deleteStudentCourse);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

StudentCourse.removeAll = async (result) => {
   try {
      const deleteAllStudentCourse =
         await prismaInstance.studentCourse.deleteMany({});
      result(null, deleteAllStudentCourse);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = StudentCourse;
