# 🚗 ParkIn — Mobile Parking Reservation Web App

**ParkIn** is a premium, mobile-first web application designed to simplify parking slot reservations. Built using vanilla HTML, CSS, and JavaScript, it offers an extremely clean, interactive, and responsive user flow for searching, choosing, reserving, and paying for parking spots in real time.

---

## 🎨 Design System & Aesthetics

The application adheres to the [ParkIn Design System], implementing the following styles:
*   **Colors:** A high-contrast combination of **Dark Navy (`#1C2033`)** and **Accent Orange (`#FF6B35`)**, supported by clean neutrals (Surface: `#F5F6FA`, Background: `#FFFFFF`).
*   **Typography:** Premium modern typography using Google Fonts like **Inter**, **Poppins**, and **Plus Jakarta Sans**.
*   **Aesthetics:** Sleek glassmorphism details, smooth border radii (12px to 28px), dynamic color transitions, hover scale states, and CSS filtering to match assets with active states.

---

## ⚙️ Core Features & Pages

The application is structured into the following pages:

1.  **[Login]** Secure user welcome entry.
2.  **[Beranda (Home)]** 
    *   Interactive maps locating available spots (e.g., Pujas UB, Gate 3).
    *   Search bar for active filters.
    *   List view of closest park zones with real-time slot counters.
3.  **[Detail Lokasi]** Highlights distance, price base, reviews, operational hours, and payment channels.
4.  **[Pilih Kendaraan (Step 1)](** 
    *   Select vehicle type (Motor at Rp 2.000/hr, Mobil at Rp 5.000/hr).
    *   Duration presets (1-3 hours) or dynamic Custom numeric entry.
    *   Dynamic cost calculations and automatic WIB timestamp formatting.
5.  **[Pilih Slot (Step 2)]**
    *   Dynamic zone headers matched to step 1 selection (e.g., "Zona A — Motor").
    *   Visual 4-column parking layout grid.
    *   Slot state colors: `Tersedia` (green), `Terisi` (red/disabled), and `Dipilih` (peach/active).
    *   Interactive select states that sync directly with the bottom info banner.
6.  **[Konfirmasi Pesanan (Step 3)]**
    *   Reservation order summary mapping slot, zone, duration, cost, and timestamps.
    *   10-minute warning lock timer ticking in real time.
    *   Cancellation modal sheets.
7.  **[Pilih Metode Bayar]**
    *   E-Wallet options (GoPay, OVO, Dana) and QRIS payment portal.
    *   Pop-up checkout validation modal overlays and toast alerts.
8.  **[Pembayaran Berhasil]** Receipts, navigation tickets, and success feedback views.

---

## 📁 Directory Structure

```text
Project_ParkIn/
├── assets/
│   ├── icons/            # Motorcycle & Car UI assets
│   └── images/           # Layout assets
├── docs/
│   └── design-system.md  # Core palette colors, layout principles, and tokens
└── pages/
    ├── login/            # Entry portal
    ├── beranda/          # Interactive map & spot selector
    ├── detail-lokasi/    # Parking facility details
    ├── pilih-kendaraan/  # Vehicle type, time & cost calculations
    ├── pilih-slot/       # Visual slot status selection grids
    ├── konfirmasi/       # Lock timer & order confirmation
    ├── pilih-metode-bayar/ # Checkout payment portals & verification modal sheets
    └── pembayaran-berhasil/# Receipt summaries
```

---

## 🚀 How to Run Locally

Since this app is built entirely with standard web components, no build pipelines or installations are required:

1.  **Clone the workspace:**
    Ensure you have the directory locally.
2.  **Open in Browser:**
    *   Double-click the **[login/index.html]** or **[beranda/index.html]** file, or
    *   Use a local HTTP server such as VS Code's **Live Server** extension to open from the root directory to ensure local storage paths remain consistent.

---
**About This Project**

This repository contains a college project created for the Desain Antar Muka Pengguna (User Interface Design) course.

The project was developed as part of an academic assignment to practice UI/UX design, prototyping, and front-end development. It is intended for learning and demonstration purposes.
