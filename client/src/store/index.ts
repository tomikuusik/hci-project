import AddTaskWindowVue from "@/components/Tasks/AddTaskWindow.vue";
import { ComponentCustomProperties, toDisplayString } from "vue";
import { createStore, mapActions, mapGetters, storeKey } from "vuex";

declare interface Course {
  name: string;
  description: string;
  maxPoints: number;
  progress: number;
  date: string;
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
  groupwork: boolean,
}

export default createStore({
  state: {
    activeCourse: "",
    tasksTabWindow: "ViewCoursesWindow",
    courses: [
      {
        name: "Course 1",
        description: "Course desc",
        maxPoints: 100,
        progress: 20,
        date: "2022 - 2023",
      tasks: [
        {
          name: "Paper prototype and heuristics",
          description:"Description",
          deadline:"May 11 - 0600",
          repeats:false,
          every:0,
          period:"",
          points:20,
          eta:4,
          etaPeriod:"",
          groupwork:false,
      },
       {
         name: "Some Homework",
          description:"Description",
          deadline:"May 11 - 0500",
          repeats:false,
          every:0,
          period:"",
          points:20,
          eta:4,
          etaPeriod:"",
          groupwork:false,
      }
    ] as Task[]},
      {
        name: "Course 2",
        description: "Course desc",
        maxPoints: 100,
        progress: 40,
        date: "2022 - 2023",
      tasks: [
      {
        name: "Some course",
      description:"Description",
      deadline:"May 11 - 0700",
      repeats:false,
      every:0,
      period:"",
      points:30,
      eta:4,
      etaPeriod:"",
      groupwork:false,
      }] as Task[]},
    ] as Course[]
  },
  getters: {
    activeCourse(state) {
      if (state.activeCourse === "") {
        let emptyCourseBe: Course  = {
          name: "Course Name",
          description: "Course Description",
          maxPoints: 100,
          progress: 0,
          date: "Start date - End Date",
          tasks: []
        }
        return emptyCourseBe
      }
      return state.courses.find( item => item.name == state.activeCourse );
    },
    activeCourseTasks(state) {
      return state.courses.find( item => item.name == state.activeCourse )?.tasks;
    },
    progressColor(state, ) {

    },
    upcomingDeadlines(state) {
      console.log("WTF")
      let tasks = [] as Task[]
      state.courses.forEach(element => {
        console.log(element.tasks)
        tasks = tasks.concat(element.tasks)
      });
      console.log(tasks)
      tasks.sort((a: Task, b: Task) => {
        return a.deadline.localeCompare(b.deadline)
      })
      console.log(tasks)
      return tasks
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
      console.log(task)
      state.courses.find( item => item.name == state.activeCourse )?.tasks.push(task);
    },
    removeTask(state, task) {
      let course = state.courses.find( item => item.name == state.activeCourse )
      course?.tasks.forEach((el, index) => {
        if (el.name === task.name) {
          state.courses.find( item => item.name == state.activeCourse )?.tasks.splice(index, index+1)
          return;
        }
      })
    }
  },
  actions: {
    setTasksViewToAddTaskWindow({ commit }) {
      commit("setTasksViewWindow", "AddTaskWindow");
      console.log("Show add task window")
    },
    showTasks({ commit }) {
      commit("setTasksViewWindow", "ViewCoursesWindow");
      console.log("Task discarded")
    },
    showEditCourseWindow({commit}) {
      commit("setTasksViewWindow", "EditCourseWindow");
    },
    setActiveCourseTo({commit}, course) {
      commit("setActiveCourse", course)
      this.dispatch("showTasks")
      console.log("Active course changed")
    },
    markTaskAsDone({commit}, task) {
      let activeCourse = this.getters.activeCourse
      activeCourse.progress += task.points
      commit("removeTask", task)
    }
  },
  modules: {},
});
