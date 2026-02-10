// ==================== SISTEMA DE ALMACENAMIENTO ====================

const Storage = {
    get: (key) => JSON.parse(localStorage.getItem(key) || '[]'),
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    
    // Usuarios y Calorías
    getUserData: () => JSON.parse(localStorage.getItem('userData') || '{}'),
    setUserData: (data) => localStorage.setItem('userData', JSON.stringify(data)),
    
    // Alimentos
    getFoods: () => Storage.get('foods'),
    addFood: (food) => {
        const foods = Storage.getFoods();
        foods.push({ id: Date.now(), ...food });
        Storage.set('foods', foods);
    },
    
    // Recetas
    getRecipes: () => Storage.get('recipes'),
    addRecipe: (recipe) => {
        const recipes = Storage.getRecipes();
        recipes.push({ id: Date.now(), ...recipe });
        Storage.set('recipes', recipes);
    },
    
    // Registro de comidas diarias
    getMeals: () => Storage.get('mealsToday'),
    addMeal: (meal) => {
        const meals = Storage.getMeals();
        meals.push({ id: Date.now(), ...meal });
        Storage.set('mealsToday', meals);
    },
    deleteMeal: (id) => {
        const meals = Storage.getMeals().filter(m => m.id !== id);
        Storage.set('mealsToday', meals);
    },
    
    // Ejercicios personalizados
    getCustomExercises: () => Storage.get('customExercises'),
    addCustomExercise: (exercise) => {
        const exercises = Storage.getCustomExercises();
        exercises.push({ id: Date.now(), ...exercise, isCustom: true });
        Storage.set('customExercises', exercises);
    },
    
    // Rutinas
    getRoutines: () => Storage.get('routines'),
    addRoutine: (routine) => {
        const routines = Storage.getRoutines();
        routines.push({ id: Date.now(), ...routine });
        Storage.set('routines', routines);
    },
    updateRoutine: (id, updatedRoutine) => {
        const routines = Storage.getRoutines();
        const index = routines.findIndex(r => r.id === id);
        if (index !== -1) {
            routines[index] = { ...routines[index], ...updatedRoutine };
            Storage.set('routines', routines);
        }
    },
    deleteRoutine: (id) => {
        const routines = Storage.getRoutines().filter(r => r.id !== id);
        Storage.set('routines', routines);
    }
};

// ==================== EJERCICIOS PREDEFINIDOS ====================

const defaultExercises = [
    { id: 'bench-press', name: 'Press de Banca', isCustom: false },
    { id: 'squat', name: 'Sentadilla', isCustom: false },
    { id: 'deadlift', name: 'Peso Muerto', isCustom: false },
    { id: 'overhead-press', name: 'Press Militar', isCustom: false },
    { id: 'pull-up', name: 'Dominadas', isCustom: false },
    { id: 'barbell-row', name: 'Remo con Barra', isCustom: false },
    { id: 'dumbbell-curl', name: 'Curl de Bíceps', isCustom: false },
    { id: 'tricep-dip', name: 'Fondos de Tríceps', isCustom: false },
    { id: 'leg-press', name: 'Prensa de Piernas', isCustom: false },
    { id: 'lat-pulldown', name: 'Jalón al Pecho', isCustom: false }
];

// ==================== FUNCIONES DE NAVEGACIÓN ====================

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    
    // Preparar datos según el modal
    if (modalId === 'add-meal-modal') {
        populateMealSelect();
    } else if (modalId === 'create-recipe-modal') {
        document.getElementById('recipe-ingredients-list').innerHTML = '';
        addRecipeIngredient();
    } else if (modalId === 'create-routine-modal') {
        document.getElementById('routine-exercises-list').innerHTML = '';
        addExerciseToRoutine();
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// ==================== CALCULADORA DE CALORÍAS ====================

function calculateCalories() {
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = parseInt(document.getElementById('goal').value);
    
    if (!age || !weight || !height) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    // Fórmula de Mifflin-St Jeor (la más precisa)
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    
    const tdee = bmr * activity;
    const target = tdee + goal;
    
    // Guardar datos del usuario
    Storage.setUserData({
        age, weight, height, gender, activity, goal,
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        target: Math.round(target)
    });
    
    // Mostrar resultados
    document.getElementById('bmr-value').textContent = Math.round(bmr);
    document.getElementById('tdee-value').textContent = Math.round(tdee);
    document.getElementById('target-value').textContent = Math.round(target);
    document.getElementById('target-calories').textContent = Math.round(target);
    document.getElementById('calorie-results').style.display = 'block';
    
    updateCalorieProgress();
}

// ==================== GESTIÓN DE ALIMENTOS ====================

function createFood() {
    const name = document.getElementById('food-name').value;
    const protein = parseFloat(document.getElementById('food-protein').value) || 0;
    const carbs = parseFloat(document.getElementById('food-carbs').value) || 0;
    const fats = parseFloat(document.getElementById('food-fats').value) || 0;
    
    if (!name) {
        alert('Por favor, ingresa el nombre del alimento');
        return;
    }
    
    // Calcular calorías totales (4 cal/g proteína y carbs, 9 cal/g grasa)
    const calories = (protein * 4) + (carbs * 4) + (fats * 9);
    
    Storage.addFood({
        name,
        protein,
        carbs,
        fats,
        calories,
        type: 'food'
    });
    
    closeModal('create-food-modal');
    document.getElementById('food-name').value = '';
    document.getElementById('food-protein').value = '';
    document.getElementById('food-carbs').value = '';
    document.getElementById('food-fats').value = '';
    
    alert(`Alimento "${name}" creado con éxito!`);
}

// ==================== GESTIÓN DE RECETAS ====================

function addRecipeIngredient() {
    const container = document.getElementById('recipe-ingredients-list');
    const foods = Storage.getFoods();
    
    const ingredientDiv = document.createElement('div');
    ingredientDiv.className = 'form-group';
    ingredientDiv.innerHTML = `
        <div style="display: flex; gap: 10px; margin-bottom: 10px;">
            <select style="flex: 2;" class="recipe-ingredient-select">
                <option value="">-- Selecciona alimento --</option>
                ${foods.map(food => `<option value="${food.id}">${food.name}</option>`).join('')}
            </select>
            <input type="number" placeholder="Cantidad (g)" style="flex: 1;" class="recipe-ingredient-amount" min="1" value="100">
            <button type="button" class="btn-danger btn-small" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    container.appendChild(ingredientDiv);
}

function createRecipe() {
    const name = document.getElementById('recipe-name').value;
    const servings = parseInt(document.getElementById('recipe-servings').value) || 1;
    
    if (!name) {
        alert('Por favor, ingresa el nombre de la receta');
        return;
    }
    
    const ingredientSelects = document.querySelectorAll('.recipe-ingredient-select');
    const ingredientAmounts = document.querySelectorAll('.recipe-ingredient-amount');
    
    const ingredients = [];
    const foods = Storage.getFoods();
    
    let totalProtein = 0, totalCarbs = 0, totalFats = 0, totalCalories = 0;
    
    ingredientSelects.forEach((select, index) => {
        const foodId = parseInt(select.value);
        const amount = parseFloat(ingredientAmounts[index].value) || 0;
        
        if (foodId && amount > 0) {
            const food = foods.find(f => f.id === foodId);
            if (food) {
                ingredients.push({ foodId, foodName: food.name, amount });
                
                // Calcular macros proporcionales
                const factor = amount / 100;
                totalProtein += food.protein * factor;
                totalCarbs += food.carbs * factor;
                totalFats += food.fats * factor;
                totalCalories += food.calories * factor;
            }
        }
    });
    
    if (ingredients.length === 0) {
        alert('Debes añadir al menos un ingrediente');
        return;
    }
    
    // Calcular por porción
    Storage.addRecipe({
        name,
        servings,
        ingredients,
        protein: totalProtein / servings,
        carbs: totalCarbs / servings,
        fats: totalFats / servings,
        calories: totalCalories / servings,
        type: 'recipe'
    });
    
    closeModal('create-recipe-modal');
    document.getElementById('recipe-name').value = '';
    document.getElementById('recipe-servings').value = '1';
    
    alert(`Receta "${name}" creada con éxito!`);
}

// ==================== REGISTRO DE COMIDAS ====================

function populateMealSelect() {
    const select = document.getElementById('meal-select');
    const foods = Storage.getFoods();
    const recipes = Storage.getRecipes();
    
    select.innerHTML = '<option value="">-- Selecciona --</option>';
    
    if (foods.length > 0) {
        select.innerHTML += '<optgroup label="Alimentos">';
        foods.forEach(food => {
            select.innerHTML += `<option value="food-${food.id}">${food.name} (${Math.round(food.calories)} cal)</option>`;
        });
        select.innerHTML += '</optgroup>';
    }
    
    if (recipes.length > 0) {
        select.innerHTML += '<optgroup label="Recetas">';
        recipes.forEach(recipe => {
            select.innerHTML += `<option value="recipe-${recipe.id}">${recipe.name} (${Math.round(recipe.calories)} cal/porción)</option>`;
        });
        select.innerHTML += '</optgroup>';
    }
}

function addMealToLog() {
    const select = document.getElementById('meal-select').value;
    const quantity = parseFloat(document.getElementById('meal-quantity').value) || 1;
    
    if (!select) {
        alert('Por favor, selecciona un alimento o receta');
        return;
    }
    
    const [type, id] = select.split('-');
    const itemId = parseInt(id);
    
    let item;
    if (type === 'food') {
        item = Storage.getFoods().find(f => f.id === itemId);
    } else {
        item = Storage.getRecipes().find(r => r.id === itemId);
    }
    
    if (item) {
        Storage.addMeal({
            name: item.name,
            calories: item.calories * quantity,
            protein: item.protein * quantity,
            carbs: item.carbs * quantity,
            fats: item.fats * quantity,
            quantity,
            type: item.type
        });
        
        closeModal('add-meal-modal');
        loadCalorieTracker();
    }
}

function deleteMeal(id) {
    if (confirm('¿Eliminar esta comida del registro?')) {
        Storage.deleteMeal(id);
        loadCalorieTracker();
    }
}

function loadCalorieTracker() {
    const meals = Storage.getMeals();
    const container = document.getElementById('meals-log');
    
    if (meals.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center;">No hay comidas registradas hoy</p>';
    } else {
        container.innerHTML = meals.map(meal => `
            <div class="meal-log">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div class="item-name">${meal.name}</div>
                        <div class="item-details">
                            ${Math.round(meal.calories)} cal | 
                            P: ${Math.round(meal.protein)}g | 
                            C: ${Math.round(meal.carbs)}g | 
                            G: ${Math.round(meal.fats)}g
                            ${meal.quantity !== 1 ? ` | Cantidad: ${meal.quantity}` : ''}
                        </div>
                    </div>
                    <button class="btn-danger btn-small" onclick="deleteMeal(${meal.id})">Eliminar</button>
                </div>
            </div>
        `).join('');
    }
    
    updateCalorieProgress();
}

function updateCalorieProgress() {
    const meals = Storage.getMeals();
    const userData = Storage.getUserData();
    const target = userData.target || 2000;
    
    const consumed = meals.reduce((sum, meal) => sum + meal.calories, 0);
    const percentage = Math.min((consumed / target) * 100, 100);
    
    document.getElementById('consumed-calories').textContent = Math.round(consumed);
    document.getElementById('target-calories').textContent = Math.round(target);
    document.getElementById('calorie-bar').style.width = percentage + '%';
}

// ==================== GESTIÓN DE EJERCICIOS ====================

function getAllExercises() {
    return [...defaultExercises, ...Storage.getCustomExercises()];
}

function createCustomExercise() {
    const name = document.getElementById('custom-exercise-name').value;
    const unit = document.getElementById('custom-exercise-unit').value;
    
    if (!name || !unit) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    Storage.addCustomExercise({ name, unit });
    
    closeModal('create-exercise-modal');
    document.getElementById('custom-exercise-name').value = '';
    document.getElementById('custom-exercise-unit').value = '';
    
    alert(`Ejercicio "${name}" creado con éxito!`);
    
    // Refrescar la lista de ejercicios en el modal de rutina si está abierto
    if (document.getElementById('create-routine-modal').classList.contains('active')) {
        const exerciseLists = document.querySelectorAll('.routine-exercise-select');
        exerciseLists.forEach(select => populateExerciseSelect(select));
    }
}

function populateExerciseSelect(selectElement) {
    const exercises = getAllExercises();
    selectElement.innerHTML = `
        <option value="">-- Selecciona ejercicio --</option>
        <option value="create-new">➕ Crear ejercicio personalizado</option>
        ${exercises.map(ex => `<option value="${ex.id}">${ex.name}${ex.isCustom ? ' (personalizado)' : ''}</option>`).join('')}
    `;
}

function addExerciseToRoutine() {
    const container = document.getElementById('routine-exercises-list');
    const exerciseDiv = document.createElement('div');
    exerciseDiv.className = 'card';
    exerciseDiv.style.marginBottom = '15px';
    
    exerciseDiv.innerHTML = `
        <div class="form-group">
            <label>Ejercicio</label>
            <select class="routine-exercise-select" onchange="handleExerciseChange(this)">
                <option value="">-- Selecciona ejercicio --</option>
            </select>
        </div>
        <div class="exercise-details" style="display: none;">
            <div class="form-group">
                <label>Número de Series</label>
                <input type="number" class="exercise-sets" min="1" value="3" onchange="generateSetsInputs(this)">
            </div>
            <div class="sets-container"></div>
        </div>
        <button type="button" class="btn-danger" onclick="this.parentElement.remove()">Eliminar Ejercicio</button>
    `;
    
    container.appendChild(exerciseDiv);
    populateExerciseSelect(exerciseDiv.querySelector('.routine-exercise-select'));
}

function handleExerciseChange(selectElement) {
    if (selectElement.value === 'create-new') {
        openModal('create-exercise-modal');
        selectElement.value = '';
        return;
    }
    
    const detailsDiv = selectElement.closest('.card').querySelector('.exercise-details');
    if (selectElement.value) {
        detailsDiv.style.display = 'block';
        generateSetsInputs(selectElement.closest('.card').querySelector('.exercise-sets'));
    } else {
        detailsDiv.style.display = 'none';
    }
}

function generateSetsInputs(setsInput) {
    const card = setsInput.closest('.card');
    const container = card.querySelector('.sets-container');
    const numSets = parseInt(setsInput.value) || 0;
    const exerciseId = card.querySelector('.routine-exercise-select').value;
    const exercise = getAllExercises().find(e => e.id === exerciseId);
    
    container.innerHTML = '';
    
    for (let i = 1; i <= numSets; i++) {
        const setDiv = document.createElement('div');
        setDiv.className = 'exercise-set';
        
        if (exercise && exercise.isCustom) {
            setDiv.innerHTML = `
                <label>Serie ${i}</label>
                <input type="number" placeholder="${exercise.unit}" class="set-measure" style="width: 100%; margin-top: 5px;">
            `;
        } else {
            setDiv.innerHTML = `
                <label>Serie ${i}</label>
                <div style="display: flex; gap: 10px; margin-top: 5px;">
                    <input type="number" placeholder="Peso (kg)" class="set-weight" style="flex: 1;">
                    <input type="number" placeholder="Repeticiones" class="set-reps" style="flex: 1;">
                </div>
            `;
        }
        
        container.appendChild(setDiv);
    }
}

// ==================== GESTIÓN DE RUTINAS ====================

function createRoutine() {
    const name = document.getElementById('routine-name').value;
    
    if (!name) {
        alert('Por favor, ingresa el nombre de la rutina');
        return;
    }
    
    const exerciseCards = document.querySelectorAll('#routine-exercises-list .card');
    const exercises = [];
    
    exerciseCards.forEach(card => {
        const exerciseId = card.querySelector('.routine-exercise-select').value;
        if (!exerciseId) return;
        
        const exercise = getAllExercises().find(e => e.id === exerciseId);
        const numSets = parseInt(card.querySelector('.exercise-sets').value) || 0;
        const sets = [];
        
        if (exercise.isCustom) {
            const measures = card.querySelectorAll('.set-measure');
            measures.forEach((input, idx) => {
                const measure = parseFloat(input.value) || 0;
                sets.push({ setNumber: idx + 1, measure });
            });
        } else {
            const weights = card.querySelectorAll('.set-weight');
            const reps = card.querySelectorAll('.set-reps');
            
            weights.forEach((weightInput, idx) => {
                const weight = parseFloat(weightInput.value) || 0;
                const repetitions = parseInt(reps[idx].value) || 0;
                sets.push({ setNumber: idx + 1, weight, reps: repetitions });
            });
        }
        
        if (sets.length > 0) {
            exercises.push({
                exerciseId,
                exerciseName: exercise.name,
                isCustom: exercise.isCustom,
                unit: exercise.unit,
                sets
            });
        }
    });
    
    if (exercises.length === 0) {
        alert('Debes añadir al menos un ejercicio con series completas');
        return;
    }
    
    Storage.addRoutine({ name, exercises });
    
    closeModal('create-routine-modal');
    document.getElementById('routine-name').value = '';
    
    alert(`Rutina "${name}" creada con éxito!`);
    
    // Recargar rutinas si estamos en la página de entrenamientos
    if (typeof loadRoutines === 'function') {
        loadRoutines();
    }
}

function loadRoutines() {
    const routines = Storage.getRoutines();
    const container = document.getElementById('routines-list');
    
    if (!container) return;
    
    if (routines.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center;">No hay rutinas creadas</p>';
    } else {
        container.innerHTML = routines.map(routine => `
            <div class="item">
                <div class="item-info">
                    <div class="item-name">${routine.name}</div>
                    <div class="item-details">${routine.exercises.length} ejercicios</div>
                </div>
                <div class="item-actions">
                    <button class="btn-secondary btn-small" onclick="viewRoutine(${routine.id})">Ver Detalles</button>
                    <button class="btn-danger btn-small" onclick="deleteRoutine(${routine.id})">Eliminar</button>
                </div>
            </div>
        `).join('');
    }
}

function viewRoutine(id) {
    const routine = Storage.getRoutines().find(r => r.id === id);
    if (!routine) return;
    
    document.getElementById('view-routine-title').textContent = routine.name;
    
    const content = routine.exercises.map((exercise, exIdx) => `
        <div class="card" style="margin-bottom: 15px;">
            <h4 style="color: var(--secondary); margin-bottom: 10px;">${exercise.exerciseName}</h4>
            ${exercise.sets.map(set => `
                <div class="exercise-set">
                    <strong>Serie ${set.setNumber}:</strong>
                    ${exercise.isCustom 
                        ? `${set.measure} ${exercise.unit}` 
                        : `${set.weight} kg × ${set.reps} reps`
                    }
                </div>
            `).join('')}
            <div style="margin-top: 15px;">
                <button class="btn-secondary btn-small" onclick="editExercise(${id}, ${exIdx})">Editar</button>
            </div>
        </div>
    `).join('');
    
    document.getElementById('view-routine-content').innerHTML = content;
    openModal('view-routine-modal');
}

function editExercise(routineId, exerciseIdx) {
    const routine = Storage.getRoutines().find(r => r.id === routineId);
    const exercise = routine.exercises[exerciseIdx];
    
    const newSets = [];
    exercise.sets.forEach((set, idx) => {
        if (exercise.isCustom) {
            const newMeasure = prompt(`Serie ${idx + 1} - Ingresa ${exercise.unit}:`, set.measure);
            if (newMeasure !== null) {
                newSets.push({ setNumber: idx + 1, measure: parseFloat(newMeasure) || 0 });
            }
        } else {
            const newWeight = prompt(`Serie ${idx + 1} - Peso (kg):`, set.weight);
            const newReps = prompt(`Serie ${idx + 1} - Repeticiones:`, set.reps);
            if (newWeight !== null && newReps !== null) {
                newSets.push({ 
                    setNumber: idx + 1, 
                    weight: parseFloat(newWeight) || 0, 
                    reps: parseInt(newReps) || 0 
                });
            }
        }
    });
    
    routine.exercises[exerciseIdx].sets = newSets;
    Storage.updateRoutine(routineId, routine);
    viewRoutine(routineId);
}

function deleteRoutine(id) {
    if (confirm('¿Eliminar esta rutina?')) {
        Storage.deleteRoutine(id);
        loadRoutines();
    }
}

// ==================== RECOMENDACIONES DE AMAZON ====================

function loadAmazonProducts() {
    const products = [
        { 
            name: 'Mancuernas Ajustables', 
            icon: '🏋️',
            search: 'mancuernas+ajustables'
        },
        { 
            name: 'Esterilla de Yoga', 
            icon: '🧘',
            search: 'esterilla+yoga'
        },
        { 
            name: 'Bandas de Resistencia', 
            icon: '💪',
            search: 'bandas+resistencia+fitness'
        },
        { 
            name: 'Proteína Whey', 
            icon: '🥤',
            search: 'proteina+whey'
        },
        { 
            name: 'Pulsera de Actividad', 
            icon: '⌚',
            search: 'pulsera+actividad+fitness'
        },
        { 
            name: 'Barra de Dominadas', 
            icon: '🚪',
            search: 'barra+dominadas'
        },
        { 
            name: 'Zapatillas Running', 
            icon: '👟',
            search: 'zapatillas+running'
        },
        { 
            name: 'Rodillo de Espuma', 
            icon: '🔵',
            search: 'rodillo+espuma+foam+roller'
        },
        { 
            name: 'Báscula Inteligente', 
            icon: '⚖️',
            search: 'bascula+inteligente+fitness'
        },
        { 
            name: 'Cuerda de Saltar', 
            icon: '🪢',
            search: 'cuerda+saltar+fitness'
        },
        { 
            name: 'Guantes de Gimnasio', 
            icon: '🧤',
            search: 'guantes+gimnasio'
        },
        { 
            name: 'Botella Deportiva', 
            icon: '🧃',
            search: 'botella+agua+deporte'
        }
    ];
    
    const container = document.getElementById('amazon-products');
    if (!container) return;
    
    container.innerHTML = products.map(product => `
        <a href="https://www.amazon.es/s?k=${product.search}&tag=fitness-21" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="amazon-product">
            <div class="amazon-icon">${product.icon}</div>
            <h4>${product.name}</h4>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Ver en Amazon →</p>
        </a>
    `).join('');
}

// ==================== INICIALIZACIÓN ====================

document.addEventListener('DOMContentLoaded', () => {
    // Cargar datos en la página de calorías
    if (document.getElementById('meals-log')) {
        loadCalorieTracker();
        
        // Cargar datos del usuario si existen
        const userData = Storage.getUserData();
        if (userData.target) {
            document.getElementById('age').value = userData.age || '';
            document.getElementById('weight').value = userData.weight || '';
            document.getElementById('height').value = userData.height || '';
            document.getElementById('gender').value = userData.gender || 'male';
            document.getElementById('activity').value = userData.activity || '1.2';
            document.getElementById('goal').value = userData.goal || '0';
            
            document.getElementById('bmr-value').textContent = userData.bmr;
            document.getElementById('tdee-value').textContent = userData.tdee;
            document.getElementById('target-value').textContent = userData.target;
            document.getElementById('target-calories').textContent = userData.target;
            document.getElementById('calorie-results').style.display = 'block';
            
            updateCalorieProgress();
        }
    }
    
    // Cargar rutinas en la página de entrenamientos
    if (document.getElementById('routines-list')) {
        loadRoutines();
    }
    
    // Cargar productos de Amazon en la página de recomendaciones
    if (document.getElementById('amazon-products')) {
        loadAmazonProducts();
    }
});
