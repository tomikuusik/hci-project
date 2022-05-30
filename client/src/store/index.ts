import AddTaskWindowVue from "@/components/Tasks/AddTaskWindow.vue";
import { ComponentCustomProperties, toDisplayString } from "vue";
import { createStore, mapActions, mapGetters, storeKey } from "vuex";

declare interface Course {
  name: string;
  description: string;
  maxPoints: number;
  progress: number;
  startdate: string;
  enddate: string;
  gradingsystem: Gradingsystem;
  tasks: Task[];
}

declare interface Task {
  name: string;
  description: string;
  deadline: string;
  repeats: boolean;
  every: number;
  period: string;
  points: number;
  eta: number;
  etaPeriod: string;
  groupwork: boolean;
}

declare interface Gradingsystem {
  gradable: boolean;
  startA: number;
  startB: number;
  startC: number;
  startD: number;
  startE: number;
}

export default createStore({
  state: {
    activeCourse: "",
    activeCourseObject: {},
    tasksTabWindow: "ViewCoursesWindow",
    courses: [
      {
        name: "Course 1",
        description: "Course desc",
        maxPoints: 100,
        progress: 20,
        startdate: "2022",
        enddate: "2023",
        gradingsystem: {
          gradable: true,
          startA: 90,
          startB: 80,
          startC: 70,
          startD: 60,
          startE: 50,
        },
        tasks: [
          {
            name: "Paper prototype and heuristics",
            description: "Description",
            deadline: "May 11 - 0600",
            repeats: false,
            every: 0,
            period: "",
            points: 20,
            eta: 4,
            etaPeriod: "",
            groupwork: false,
          },
          {
            name: "Some Homework",
            description: "Description",
            deadline: "May 11 - 0500",
            repeats: false,
            every: 0,
            period: "",
            points: 20,
            eta: 4,
            etaPeriod: "",
            groupwork: false,
          },
        ] as Task[],
      },
      {
        name: "Course 2",
        description: "Course desc",
        maxPoints: 100,
        progress: 40,
        startdate: "2022",
        enddate: "2023",
        gradingsystem: {
          gradable: true,
          startA: 90,
          startB: 80,
          startC: 70,
          startD: 60,
          startE: 50,
        },
        tasks: [
          {
            name: "Some course",
            description: "Description",
            deadline: "May 11 - 0700",
            repeats: false,
            every: 0,
            period: "",
            points: 30,
            eta: 4,
            etaPeriod: "",
            groupwork: false,
          },
        ] as Task[],
      },
    ] as Course[],
  },
  getters: {
    activeCourse(state) {
      if (state.activeCourse === "") {
        const emptyCourseBe: Course = {
          name: "",
          description: "Course Description",
          maxPoints: 100,
          progress: 0,
          startdate: "Start date",
          enddate: "End Date",
          gradingsystem: {
            gradable: true,
            startA: 90,
            startB: 80,
            startC: 70,
            startD: 60,
            startE: 50,
          },
          tasks: [],
        };
        return emptyCourseBe;
      }
      return state.courses.find((item) => item.name == state.activeCourse);
    },
    activeCourseTasks(state) {
      return state.courses.find((item) => item.name == state.activeCourse)
        ?.tasks;
    },
    upcomingDeadlines(state) {
      console.log("WTF");
      let tasks = [] as Task[];
      state.courses.forEach((element) => {
        console.log(element.tasks);
        tasks = tasks.concat(element.tasks);
      });
      console.log(tasks);
      tasks.sort((a: Task, b: Task) => {
        return a.deadline.localeCompare(b.deadline);
      });
      console.log(tasks);
      return tasks;
    },
    courses(state) {
      return state.courses;
    },
  },
  mutations: {
    setTasksViewWindow(state, window) {
      state.tasksTabWindow = window;
    },
    setActiveCourse(state, course) {
      state.activeCourse = course;
    },
    addTask(state, task) {
      console.log(task);
      state.courses
        .find((item) => item.name == state.activeCourse)
        ?.tasks.push(task);
    },
    removeTask(state, task) {
      const course = state.courses.find(
        (item) => item.name == state.activeCourse
      );
      course?.tasks.forEach((el, index) => {
        if (el.name === task.name) {
          state.courses
            .find((item) => item.name == state.activeCourse)
            ?.tasks.splice(index, index + 1);
          return;
        }
      });
    },
    removeCourse(state, courseName) {
      console.log("Start the removal of " + courseName);
      state.courses.forEach((el, index) => {
        if (el.name === courseName) {
          console.log("Found match: " + el + " courseName " + courseName);
          state.courses.splice(index, index + 1);
        }
        console.log(this.getters.courses);
      });
    },
    addCourse(state, course) {
      state.courses.push(course);
      console.log(this.getters.courses);
    },
    updateCourse(state, course) {
      state.courses.forEach((el, index) => {
        if (el === course) {
          console.log("Found match: " + el.name + " courseName " + course.name);
          state.courses[index] = course;
        }
      });
    },
  },
  actions: {
    setTasksViewToAddTaskWindow({ commit }) {
      commit("setTasksViewWindow", "AddTaskWindow");
      console.log("Show add task window");
    },
    showTasks({ commit }) {
      commit("setTasksViewWindow", "ViewCourseInfoWindow");
      console.log("Task discarded");
    },
    startEditingCourse({ commit }) {
      commit("setTasksViewWindow", "EditCourseWindow");
    },
    startAddingNewCourse({ commit }) {
      commit("setTasksViewWindow", "EditCourseWindow");
      commit("setActiveCourse", "");
    },
    setActiveCourseTo({ commit }, course) {
      commit("setActiveCourse", course);
      this.dispatch("showTasks");
      console.log("Active course changed");
    },
    markTaskAsDone({ commit }, task) {
      const activeCourse = this.getters.activeCourse;
      activeCourse.progress += task.points;
      commit("removeTask", task);
    },
    discardCourse({ commit }, courseName) {
      this.commit("removeCourse", courseName);
      this.commit("setActiveCourse", "");
      this.dispatch("showTasks");
    },
  },
  modules: {},
});
