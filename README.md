# Shop Inventory Project

## Overview
This project is broken into three phases Inventory Management, User Profiles, and Cart & Orders. The reason these three phases are broken apart is to focus the development efforts and provide an example of feature integrations over the life of a project as it evolves. This first phase is more of an admin panel for managing the inventory of the shop. The second focus' on making an authentication system for users to log in and track their own profiles. The third and final phase is the final piece of the puzzle, while it mainly deals with creating a shopping cart system you will also make the market place where users can browse products and add them to their carts 

## Requirements

1. **Inventory Management**
    - [x] Users (admin) can create new product
    - [x] Product should include
        - name
        - description
        - quantity 
        - active status
    - [x] Users (admin) can updated product
    - [] Users (admin) can deactivate product
    - [x] Display product in a list view
    - [] Be able to filter list by:
        - [] active
        - [] non-active
        - [x] quantity
2. **User Profiles**
    - [x] Users can register for a new account
        - should have the following information:
            - [] Username
            - [x] Password
                - [x] Password should be encrypted
                    - encrypted before storing in a DB
            - [x] Email
            - [] Profile picture
            - [] Profile Bio
    - [] Users can only access their profile
        - cannot access admin section of site or other user profiles
    - [x] User sessions stored as auth tokens
    - [x] Tokens stored in the frontend
        - used cookies
    - [] Tokens are sent withi headers of every backend request

3. **Cart & Orders**
    - [] Users can view existing product
    - [] Once logged in porducts should display an add to cart button
    - [] Cart is an array of products
    - [] Allow users to view cart after login
    - [] Users cannot see other users or carts
    - [] Users can update their cart