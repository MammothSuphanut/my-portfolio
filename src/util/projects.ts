import {
  vue,
  js,
  next,
  ts,
  git,
  github,
  gitlab,
  reactRouter,
  html,
  css,
  yarn,
  antd,
  react,
  reactNative,
  supabase,
  lineliff,
} from "util/tools";
import depa from "@assets/project_preview/depa.svg";
import GS_admin from "@assets/project_preview/GS_admin.svg";
import GS_pos from "@assets/project_preview/GS_pos.svg";
import smartDoctor from "@assets/project_preview/smartDoctor.svg";
import namasart_liff from "@assets/project_preview/namasart_liff.jpg";
import WellKidz from "@assets/project_preview/WellKidz.svg";
import classwin_hrm from "@assets/project_preview/classwin_hrm.svg";
import natureX from "@assets/project_preview/natureX.svg";
import classwin_hrm_mobile from "@assets/project_preview/classwin_hrm_mobile.svg";

export const projectList = [
  {
    name: "Samitivej Well Kidz",
    desc: "Samitivej Well Kidz is an app for tracking and recording children's growth, health status, and symptoms. It features growth tracking, symptom monitoring, medical appointment scheduling, consultation requests, payment systems, etc.",
    image: WellKidz,
    tools: [reactNative, js, antd, css, git, gitlab, yarn],
  },
  {
    name: "Gold Store POS",
    desc: "Gold Store POS is a point-of-sale system for Yaowarat Krungthep gold store. It includes role-based authentication for different access levels. Features include buying, selling, exchanging, pawning, transferring, summaries, reports, etc.",
    image: GS_pos,
    tools: [react, ts, antd, html, css, git, gitlab, reactRouter, yarn],
  },
  {
    name: "Gold Store Web-Admin",
    desc: "Gold Store Web-Admin is a program for managing all branches of Yaowarat Krungthep gold stores. It features the same as POS but works across branches, with master data management, branch and staff management, and admin system capabilities.",
    image: GS_admin,
    tools: [next, ts, antd, html, css, git, gitlab, reactRouter, yarn],
  },
  {
    name: "Classwin HRM Admin",
    desc: "Classwin HRM Admin is a web app for managing employees in an organization. It handles tasks like adding employees, managing roles, salaries, shifts, holidays, social security, taxes, and deductions, etc.",
    image: classwin_hrm,
    tools: [react, ts, antd, html, css, git, gitlab, reactRouter, yarn],
  },
  {
    name: "Classwin HRM Mobile",
    desc: "Classwin HRM Mobile is an app for company employees, allowing them to view their personal information, check in, submit leave forms, view work shift calendars, use chatbots, access training courses, and follow internal company news, etc.",
    image: classwin_hrm_mobile,
    tools: [reactNative, ts, antd, html, css, git, gitlab, yarn],
  },
  {
    name: "Namasart",
    desc: "Namasart is a LINE LIFF app for analyzing current names and suggesting new ones, along with analysis results and auspicious dates and times for name changes.",
    image: namasart_liff,
    tools: [
      react,
      ts,
      antd,
      html,
      css,
      supabase,
      lineliff,
      git,
      gitlab,
      reactRouter,
      yarn,
    ],
  },
  {
    name: "Samitivej Smart Doctor Management App",
    desc: "Samitivej Smart Doctor Management App is an app for medical personnel in the Samitivej hospital. It includes data systems, scheduling, various forms, points accumulation, rewards redemption, etc.",
    image: smartDoctor,
    tools: [reactNative, ts, antd, css, git, gitlab, yarn],
  },
  {
    name: "NatureX Web-App",
    desc: "NatureX Web-App is an app for tracking and displaying data for carbon credit assessment. It also includes a project management system and a project report summary system.",
    image: natureX,
    tools: [react, ts, antd, css, git, gitlab, yarn],
  },
  {
    name: "Depa Web-Admin",
    desc: "Depa Web-Admin is a web app focused on course management, featuring chat, chatbots, live chat, course administration, and various banners. It also serves as an admin system for managing users and internal staff in that organization.",
    image: depa,
    tools: [vue, js, html, css, git, github],
  },
];
