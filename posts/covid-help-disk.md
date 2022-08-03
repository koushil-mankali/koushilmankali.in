---
url: "covid-help-disk"
title: "Covid Help Disk"
date: "21-06-2021"
number: 3
image: "covidhd.png"
gitHub: "https://github.com/koushil-mankali/covid-help-disk-nodejs"
liveSite: "https://covidhd.koushilmankali.com/"
discreption: "Covid Help Disk (CHD) is a coivd 19 help disk form people to search for hospitals near by them for beds avalibility oxygen avalibility and medicines avalibility which will help people not to waste time in searching for beds in covid emergency."
keywords: "covid, covid 19, covid 19 project, covid project, mern project, mern project on covid, mern project on covid 19, react js project on covid 19, mern project with source code, koushil, koushil mankali"
---

Stack : MERN Stack

### About Covid Help Disk (Project):

In this covid situation people are facing a lots of problems because of unavailability of beds, oxygen and medicines but actually we have enough stock of them just we need to use them effeciently so I have made a project which will help public (users) to know in which hospital beds, oxygen , medicine is available so that they can directly visit that hospital without wasting there time.

### Total Modules:

- User Home
- Beds
- Medical Colleges
- Login and Signup (with email verification)
- Dashboard for hospitals
- Add Hospital Details
- Add Medicine Details
- Add Oxygen, Beds avaliability

### User Modules :

#### Home Screen

![home screen](/Images/postImages/covidhd.png)

In the home screen users can :

- Know daily cases count.
- Search Hospitals by Name.
- Search Hospitals by State and District.
- Hospital Management can add their Hospital to our list.

#### Hospitals List

![home screen](/Images/postImages/chd/Hospitals-List.png)

In the Hospitals List users can :

- Know **Total** **Occupied** and **Avaliable** beds capacity of that hospital.
- Know whether **Oxygen** is avaliable or not in that hospital.

- Users can also **filter** Hospitals by Government or Private.

#### Hospitals Details

![home screen](/Images/postImages/chd/Hospital-Details.png)

In the Hospitals Details users can :

- Know **Total** **Occupied** and **Avaliable** beds capacity of that hospital.
- Know how much **Oxygen** is left in that hospital.

- Know which medicines are avaliable so that they can easily find medicines like ramdesiver etc... with price details.

#### Beds

![home screen](/Images/postImages/chd/Beds.png)

In the Beds users can :

- Total beds and avaliable beds as per states.

#### Medical Colleges

![home screen](/Images/postImages/chd/Medical-Collges.png)

In the Medical Colleges users can :

- Know in the select state how many medical colleges are avaliable.
- In those medical colleges how many beds are avaliable and their beds capacity.

#### Medical Colleges

![home screen](/Images/postImages/chd/Medical-Collges.png)

In the Medical Colleges users can :

- Know in the select state how many medical colleges are avaliable.
- In those medical colleges how many beds are avaliable and their beds capacity.

### Admin Modules:

#### Login / Signup:

![home screen](/Images/postImages/chd/Login.png)

In the Login / Signup Admin can :

- This includes email verification too.
- Login in to their account
- Signup for a account

#### Dashboard:

![home screen](/Images/postImages/chd/Dashboard.png)

In the Dashboard Admin can :

- View all the options avalible

  1. Hospital Info
  2. Update Details
  3. Hospital Details
  4. Logout

#### Hospital Info:

![home screen](/Images/postImages/chd/HospitalInfo.png)

In the Hospital Info Admin can :

- Update their Hospital Details.
  1. Contact Details
  2. State
  3. District
  4. Address 5. Type (Govt / Private);

#### Update Details:

![home screen](/Images/postImages/chd/Update-Details.png)

In the Update Details Admin can :

- Add Medicines Avaliable at their Hospital.
- Update Avaliable Medicines and their price too.

#### Hospital Details:

![home screen](/Images/postImages/chd/Update-Hospital-Details.png)

In the Hospital Details Admin can :

- Update **Total** **Avaliable** and **Occupied** beds count.
- Update **Oxygen Avalibility** and also how much **Oxyge** is left so that users can decide whether to go and admit in that hospital or search near by other hospital.

---

**If you want to run this project You have to create a .env file and place these details in it:**

- URL = (mongodb database url) for databse access
- API_KEY = (send grid api key) For email verifications
- JWT_SECRET_KEY = (add a secret key here ex: AS34SDF4582ahgsd9) for jsonwebtoken

This project is running on port 4000 you can change it by going to index file.

---

**Source Code** and **Live Project** links are provides at the top of this article.
