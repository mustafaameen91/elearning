const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const Group = function (group) {
   this.groupName = group.groupName;
   this.courseId = group.courseId;
};

Group.create = async (newGroup, result) => {
   try {
      const group = await prismaInstance.group.create({
         data: newGroup,
      });

      result(null, group);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Group.findByIdCourseId = async (courseId, result) => {
   try {
      const courseGroup = await prismaInstance.group.findMany({
         where: {
            courseId: JSON.parse(courseId),
         },
         include: {
            StudentGroup: {
               include: {
                  user: true,
               },
            },
         },
      });

      result(null, courseGroup);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Group.findById = async (groupId, result) => {
   try {
      const singleGroup = await prismaInstance.group.findUnique({
         where: {
            idGroup: JSON.parse(groupId),
         },
      });

      if (singleGroup) {
         result(null, singleGroup);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Group with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Group.getAll = async (result) => {
   try {
      const groups = await prismaInstance.group.findMany();
      result(null, groups);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Group.updateById = async (groupId, group, result) => {
   try {
      const updateGroup = await prismaInstance.group.update({
         where: { idGroup: JSON.parse(groupId) },
         data: group,
      });
      result(null, updateGroup);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Group.remove = async (id, result) => {
   try {
      const deleteGroup = await prismaInstance.group.delete({
         where: { idGroup: JSON.parse(id) },
      });
      result(null, deleteGroup);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Group.removeAll = async (result) => {
   try {
      const deleteAllGroup = await prismaInstance.group.deleteMany({});
      result(null, deleteAllGroup);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = Group;
