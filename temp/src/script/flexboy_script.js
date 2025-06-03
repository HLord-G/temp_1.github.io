/*


> ========================================================== <

====[*] Click Event for Class
<button event-class-click="thisisanid2b" event-toggle="true">

[A]:
<div eventid="thisisanid2b" ev-do-update="p-[10] left-[15px]">

[B]:
<div event-id-list="{leftcall:'p-[20px]', rightcall:'bg-[green]'}">


> ========================================================== <
====[*] para sa SCREEN RESIZE

attr_size_changer="('[loopers]', 570, 'nice'),('[loopers]', 530, 'none'), ('[loopers]', 330, 'sections')"


> ========================================================== <


====[*] para sa popup model 
====[*] para sa div element
popup="openpops" openview="false" popstyle="fixed" popindex="3"

====[*] para sa button
popup_cls="openpops" popup_cls_ani="scale-out-bl"
popup_opn="openpops" popup_opn_ani="fade-in-right"


> ========================================================== <

====[*] PARA SA SCROLL LOGIC.

====[*] WARNING [*]====
 BAWAL MAG SPACE ANI 
 PAG MAG SPACE KA
 DILI MO GANA
====[!] WARNING [!]====

scroll-logic-add: 'trigger,attr1|attr2|attr3,val1|val2|val3'
scroll-logic-change: 'trigger,attr1|attr2|attr3,val1|val2|val3'
scroll-logic-remove: 'trigger,attr1|attr2|attr3,val1|val2|val3'

'432,attr1|attr2|attr3,val1|val2|val3'
'center,attr1|attr2|attr3,val1|val2|val3'
'10%,attr1|attr2|attr3,val1|val2|val3'

'center,class,p-[20px]'


scroll-logic-add-per: 'trigger,attr1|attr2|attr3,val1|val2|val3'
scroll-logic-change-per: 'trigger,attr1|attr2|attr3,val1|val2|val3'
scroll-logic-remove-per: 'trigger,attr1|attr2|attr3,val1|val2|val3'


para sa debug
<div class="scroll-info" id="scrollInfo">Scroll: 0</div>
<div class="debug-info" id="debugInfo">Debug: Ready</div>

> ========================================================== <

=======[] ENTRANCE ANIMATION

scale-in-center
scale-in-bl
scale-in-ver-center
scale-in-top
scale-in-left
scale-in-ver-top
scale-in-tr
scale-in-tl
scale-in-ver-bottom
scale-in-right
scale-in-hor-center
scale-in-br
scale-in-hor-left
scale-in-bottom
scale-in-hor-right
rotate-in-center
rotate-in-bl
rotate-in-diag-2
rotate-in-top
rotate-in-left
rotate-in-tr
rotate-in-tl
rotate-in-right
rotate-in-hor
rotate-in-br
rotate-in-ver
rotate-in-bottom
rotate-in-diag-1
rotate-in-2-cw
rotate-in-2-tr-cw
rotate-in-2-tl-cw
rotate-in-2-ccw
rotate-in-2-tr-ccw
rotate-in-2-tl-ccw
rotate-in-2-fwd-cw
rotate-in-2-br-cw
rotate-in-2-fwd-ccw
rotate-in-2-br-ccw
rotate-in-2-bck-cw
rotate-in-2-bl-cw
rotate-in-2-bck-ccw
rotate-in-2-bl-ccw
slide-in-blurred-top
slide-in-blurred-left
slide-in-blurred-tr
slide-in-blurred-tl
slide-in-blurred-right
slide-in-blurred-bottom
slide-in-blurred-br
slide-in-blurred-bl
slide-in-elliptic-top-fwd
slide-in-elliptic-left-fwd
slide-in-elliptic-top-bck
slide-in-elliptic-left-bck
slide-in-elliptic-right-fwd
slide-in-elliptic-right-bck
slide-in-elliptic-bottom-fwd
swing-in-top-fwd
swing-in-left-fwd
swing-in-top-bck
swing-in-left-bck
swing-in-right-fwd
swing-in-right-bck
swing-in-bottom-fwd
swing-in-bottom-bck
fade-in
fade-in-br
fade-in-fwd
fade-in-bottom
fade-in-bck
fade-in-bl
fade-in-top
fade-in-left
fade-in-tr
fade-in-tl
fade-in-right



=======[] EXIT ANIMATIONS

scale-out-center
scale-out-vertical
scale-out-bl
scale-out-top
scale-out-ver-top
scale-out-tr
scale-out-tl
scale-out-right
scale-out-horizontal
scale-out-br
scale-out-hor-left
scale-out-bottom
scale-out-hor-right
slide-out-top
slide-out-left
slide-out-tr
slide-out-tl
slide-out-right
slide-out-br
slide-out-bottom
slide-out-bl
slide-out-bck-center
slide-out-bck-bl
slide-out-bck-left
slide-out-bck-top
slide-out-bck-tr
slide-out-bck-tl
slide-out-bck-right
slide-out-bck-br
slide-out-bck-bottom
slide-out-fwd-center
slide-out-fwd-bl
slide-out-fwd-top
slide-out-fwd-left
slide-out-fwd-tr
slide-out-fwd-tl
slide-out-fwd-right
slide-out-fwd-br
slide-out-fwd-bottom
slide-out-blurred-top
slide-out-blurred-left
slide-out-blurred-tr
slide-out-blurred-tl
slide-out-blurred-br
slide-out-blurred-bottom
slide-out-blurred-bl

*/ 



 

//===========[] SCROLL LOGIC
function setupScrollLogic() {
    console.log('Setting up scroll logic...');
    
    // Handle original scroll-toggle
    const toggleElements = document.querySelectorAll('[scroll-toggle]');
    console.log('Found toggle elements:', toggleElements.length);
    
    toggleElements.forEach(el => {
        const attr = el.getAttribute('scroll-toggle');
        let parsed;

        try {
            parsed = eval(attr);
        } catch (e) {
            console.error('Invalid scroll-toggle format:', attr);
            return;
        }

        const [originalClasses, trigger, newClasses] = parsed;
        let toggled = false;

        function handleToggle() {
            const shouldToggle = checkTrigger(el, trigger);

            if (shouldToggle && !toggled) {
                el.classList.remove(...originalClasses);
                el.classList.add(...newClasses);
                toggled = true;
            } else if (!shouldToggle && toggled) {
                el.classList.remove(...newClasses);
                el.classList.add(...originalClasses);
                toggled = false;
            }
        }

        window.addEventListener('scroll', handleToggle);
        window.addEventListener('resize', handleToggle);
        handleToggle();
    });

    // Handle scroll-logic-add with simple parsing
    const addElements = document.querySelectorAll('[scroll-logic-add]');
    console.log('Found add elements:', addElements.length);
    
    addElements.forEach((el, index) => {
        const attr = el.getAttribute('scroll-logic-add');
        console.log(`Processing add element ${index}:`, attr);
        
        // Simple parsing: trigger,attr1|attr2|attr3,val1|val2|val3
        const parts = attr.split(',');
        if (parts.length !== 3) {
            console.error('Invalid format, expected 3 parts:', attr);
            return;
        }
        
        const trigger = isNaN(parts[0]) ? parts[0] : parseInt(parts[0]);
        const targetAttrs = parts[1].split('|');
        const values = parts[2].split('|');
        
        console.log('Parsed:', {trigger, targetAttrs, values});
        
        let added = false;

        function handleAdd() {
            const shouldAdd = checkTrigger(el, trigger);
            
            if (shouldAdd && !added) {
                console.log(`Adding to element ${index}`);
                updateDebug(`Adding to element ${index}`);
                
                for (let i = 0; i < targetAttrs.length; i++) {
                    const attrType = targetAttrs[i];
                    const value = values[i];

                    if (attrType === 'class') {
                        el.classList.add(value);
                        console.log(`Added class: ${value}`);
                    } else {
                        el.setAttribute(attrType, value);
                        console.log(`Set attribute ${attrType}: ${value}`);
                    }
                }
                added = true;
            } else if (!shouldAdd && added) {
                console.log(`Removing from element ${index}`);
                updateDebug(`Removing from element ${index}`);
                
                for (let i = 0; i < targetAttrs.length; i++) {
                    const attrType = targetAttrs[i];
                    const value = values[i];

                    if (attrType === 'class') {
                        el.classList.remove(value);
                        console.log(`Removed class: ${value}`);
                    } else {
                        el.setAttribute(attrType, '');
                        console.log(`Cleared attribute: ${attrType}`);
                    }
                }
                added = false;
            }
        }

        window.addEventListener('scroll', handleAdd);
        window.addEventListener('resize', handleAdd);
        handleAdd();
    });

    // Handle scroll-logic-add-per (PERMANENT) with simple parsing
    const addPerElements = document.querySelectorAll('[scroll-logic-add-per]');
    console.log('Found add-per elements:', addPerElements.length);
    
    addPerElements.forEach((el, index) => {
        const attr = el.getAttribute('scroll-logic-add-per');
        console.log(`Processing add-per element ${index}:`, attr);
        
        const parts = attr.split(',');
        if (parts.length !== 3) {
            console.error('Invalid format, expected 3 parts:', attr);
            return;
        }
        
        const trigger = isNaN(parts[0]) ? parts[0] : parseInt(parts[0]);
        const targetAttrs = parts[1].split('|');
        const values = parts[2].split('|');
        
        console.log('Parsed:', {trigger, targetAttrs, values});
        
        let executed = false;

        function handleAddPer() {
            const shouldAdd = checkTrigger(el, trigger);
            
            if (shouldAdd && !executed) {
                console.log(`PERMANENTLY adding to element ${index}`);
                updateDebug(`PERMANENTLY adding to element ${index}`);
                
                for (let i = 0; i < targetAttrs.length; i++) {
                    const attrType = targetAttrs[i];
                    const value = values[i];

                    if (attrType === 'class') {
                        el.classList.add(value);
                        console.log(`PERMANENTLY added class: ${value}`);
                    } else {
                        el.setAttribute(attrType, value);
                        console.log(`PERMANENTLY set attribute ${attrType}: ${value}`);
                    }
                }
                executed = true;
                // Remove event listeners since it's permanent
                window.removeEventListener('scroll', handleAddPer);
                window.removeEventListener('resize', handleAddPer);
            }
        }

        window.addEventListener('scroll', handleAddPer);
        window.addEventListener('resize', handleAddPer);
        handleAddPer();
    });

    // Handle scroll-logic-remove-per (PERMANENT) with simple parsing
    const removePerElements = document.querySelectorAll('[scroll-logic-remove-per]');
    console.log('Found remove-per elements:', removePerElements.length);
    
    removePerElements.forEach((el, index) => {
        const attr = el.getAttribute('scroll-logic-remove-per');
        console.log(`Processing remove-per element ${index}:`, attr);
        
        const parts = attr.split(',');
        if (parts.length !== 3) {
            console.error('Invalid format, expected 3 parts:', attr);
            return;
        }
        
        const trigger = isNaN(parts[0]) ? parts[0] : parseInt(parts[0]);
        const targetAttrs = parts[1].split('|');
        const values = parts[2].split('|');
        
        console.log('Parsed:', {trigger, targetAttrs, values});
        
        let executed = false;

        function handleRemovePer() {
            const shouldRemove = checkTrigger(el, trigger);
            
            if (shouldRemove && !executed) {
                console.log(`PERMANENTLY removing from element ${index}`);
                updateDebug(`PERMANENTLY removing from element ${index}`);
                
                for (let i = 0; i < targetAttrs.length; i++) {
                    const attrType = targetAttrs[i];
                    const value = values[i];

                    if (attrType === 'class') {
                        el.classList.remove(value);
                        console.log(`PERMANENTLY removed class: ${value}`);
                    } else {
                        el.removeAttribute(attrType);
                        console.log(`PERMANENTLY removed attribute: ${attrType}`);
                    }
                }
                executed = true;
                // Remove event listeners since it's permanent
                window.removeEventListener('scroll', handleRemovePer);
                window.removeEventListener('resize', handleRemovePer);
            }
        }

        window.addEventListener('scroll', handleRemovePer);
        window.addEventListener('resize', handleRemovePer);
        handleRemovePer();
    });

    // Handle scroll-logic-change-per (PERMANENT) with simple parsing
    const changePerElements = document.querySelectorAll('[scroll-logic-change-per]');
    console.log('Found change-per elements:', changePerElements.length);
    
    changePerElements.forEach((el, index) => {
        const attr = el.getAttribute('scroll-logic-change-per');
        console.log(`Processing change-per element ${index}:`, attr);
        
        const parts = attr.split(',');
        if (parts.length !== 3) {
            console.error('Invalid format, expected 3 parts:', attr);
            return;
        }
        
        const trigger = isNaN(parts[0]) ? parts[0] : parseInt(parts[0]);
        const targetAttrs = parts[1].split('|');
        const values = parts[2].split('|');
        
        console.log('Parsed:', {trigger, targetAttrs, values});
        
        let executed = false;

        function handleChangePer() {
            const shouldChange = checkTrigger(el, trigger);
            
            if (shouldChange && !executed) {
                console.log(`PERMANENTLY changing element ${index}`);
                updateDebug(`PERMANENTLY changing element ${index}`);
                
                for (let i = 0; i < targetAttrs.length; i++) {
                    const attrType = targetAttrs[i];
                    const value = values[i];

                    if (attrType === 'class') {
                        el.className = value;
                        console.log(`PERMANENTLY changed class to: ${value}`);
                    } else {
                        el.setAttribute(attrType, value);
                        console.log(`PERMANENTLY set attribute ${attrType}: ${value}`);
                    }
                }
                executed = true;
                // Remove event listeners since it's permanent
                window.removeEventListener('scroll', handleChangePer);
                window.removeEventListener('resize', handleChangePer);
            }
        }

        window.addEventListener('scroll', handleChangePer);
        window.addEventListener('resize', handleChangePer);
        handleChangePer();
    });

    // Handle scroll-logic-remove with simple parsing
    const removeElements = document.querySelectorAll('[scroll-logic-remove]');
    console.log('Found remove elements:', removeElements.length);
    
    removeElements.forEach((el, index) => {
        const attr = el.getAttribute('scroll-logic-remove');
        console.log(`Processing remove element ${index}:`, attr);
        
        // Simple parsing: trigger,attr1|attr2|attr3,val1|val2|val3
        const parts = attr.split(',');
        if (parts.length !== 3) {
            console.error('Invalid format, expected 3 parts:', attr);
            return;
        }
        
        const trigger = isNaN(parts[0]) ? parts[0] : parseInt(parts[0]);
        const targetAttrs = parts[1].split('|');
        const values = parts[2].split('|');
        
        console.log('Parsed:', {trigger, targetAttrs, values});
        
        let removed = false;

        function handleRemove() {
            const shouldRemove = checkTrigger(el, trigger);
            
            if (shouldRemove && !removed) {
                console.log(`Removing from element ${index}`);
                updateDebug(`Removing from element ${index}`);
                
                for (let i = 0; i < targetAttrs.length; i++) {
                    const attrType = targetAttrs[i];
                    const value = values[i];

                    if (attrType === 'class') {
                        el.classList.remove(value);
                        console.log(`Removed class: ${value}`);
                    } else {
                        el.removeAttribute(attrType);
                        console.log(`Removed attribute: ${attrType}`);
                    }
                }
                removed = true;
            } else if (!shouldRemove && removed) {
                console.log(`Adding back to element ${index}`);
                updateDebug(`Adding back to element ${index}`);
                
                for (let i = 0; i < targetAttrs.length; i++) {
                    const attrType = targetAttrs[i];
                    const value = values[i];

                    if (attrType === 'class') {
                        el.classList.add(value);
                        console.log(`Added back class: ${value}`);
                    } else {
                        el.setAttribute(attrType, value);
                        console.log(`Added back attribute ${attrType}: ${value}`);
                    }
                }
                removed = false;
            }
        }

        window.addEventListener('scroll', handleRemove);
        window.addEventListener('resize', handleRemove);
        handleRemove();
    });

    // Handle scroll-logic-change with simple parsing
    const changeElements = document.querySelectorAll('[scroll-logic-change]');
    console.log('Found change elements:', changeElements.length);
    
    changeElements.forEach((el, index) => {
        const attr = el.getAttribute('scroll-logic-change');
        console.log(`Processing change element ${index}:`, attr);
        
        // Simple parsing: trigger,attr1|attr2|attr3,val1|val2|val3
        const parts = attr.split(',');
        if (parts.length !== 3) {
            console.error('Invalid format, expected 3 parts:', attr);
            return;
        }
        
        const trigger = isNaN(parts[0]) ? parts[0] : parseInt(parts[0]);
        const targetAttrs = parts[1].split('|');
        const values = parts[2].split('|');
        
        console.log('Parsed:', {trigger, targetAttrs, values});
        
        let changed = false;
        let originalValues = {};

        // Store original values
        for (let i = 0; i < targetAttrs.length; i++) {
            const attrType = targetAttrs[i];
            if (attrType === 'class') {
                originalValues[attrType] = el.className;
            } else {
                originalValues[attrType] = el.getAttribute(attrType) || '';
            }
        }

        // Store in scroll-origin attribute
        el.setAttribute('scroll-origin', JSON.stringify(originalValues));
        console.log(`Stored original values for element ${index}:`, originalValues);

        function handleChange() {
            const shouldChange = checkTrigger(el, trigger);

            if (shouldChange && !changed) {
                console.log(`Changing element ${index}`);
                updateDebug(`Changing element ${index}`);
                
                for (let i = 0; i < targetAttrs.length; i++) {
                    const attrType = targetAttrs[i];
                    const value = values[i];

                    if (attrType === 'class') {
                        el.className = value;
                        console.log(`Changed class to: ${value}`);
                    } else {
                        el.setAttribute(attrType, value);
                        console.log(`Set attribute ${attrType}: ${value}`);
                    }
                }
                changed = true;
            } else if (!shouldChange && changed) {
                console.log(`Restoring element ${index}`);
                updateDebug(`Restoring element ${index}`);
                
                const originData = JSON.parse(el.getAttribute('scroll-origin'));
                for (let i = 0; i < targetAttrs.length; i++) {
                    const attrType = targetAttrs[i];
                    const originalValue = originData[attrType];

                    if (attrType === 'class') {
                        el.className = originalValue;
                        console.log(`Restored class to: ${originalValue}`);
                    } else {
                        el.setAttribute(attrType, originalValue);
                        console.log(`Restored attribute ${attrType}: ${originalValue}`);
                    }
                }
                changed = false;
            }
        }

        window.addEventListener('scroll', handleChange);
        window.addEventListener('resize', handleChange);
        handleChange();
    });
}

// Helper function to check trigger conditions
function checkTrigger(el, trigger) {
    const rect = el.getBoundingClientRect();
    const elHeight = rect.height;
    const winHeight = window.innerHeight;
    const elCenter = rect.top + elHeight / 2;
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    function isVisible(rect) {
        return rect.bottom > 0 && rect.top < window.innerHeight;
    }

    if (typeof trigger === 'number') {
        // Trigger based on scroll position
        return scrollY >= trigger;
    } else if (typeof trigger === 'string') {
        if (trigger === 'top') {
            return isVisible(rect) && rect.top <= 0;
        } else if (trigger === 'center') {
            return isVisible(rect) && elCenter <= winHeight / 2;
        } else if (trigger === 'bottom') {
            return isVisible(rect) && rect.bottom <= winHeight;
        } else if (trigger.endsWith('%')) {
            // Percent-based trigger
            const percent = parseFloat(trigger);
            if (!isNaN(percent)) {
                const threshold = winHeight * (1 - percent / 100);
                return isVisible(rect) && elCenter <= threshold;
            }
        }
    }
    return false;
}

// Update scroll position display
function updateScrollInfo() {
    try {
        const scrollInfo = document.getElementById('scrollInfo');
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollInfo.textContent = `Scroll: ${Math.round(scrollY)}px`;
    } catch (error) {
        
    }
}

// Update debug info
function updateDebug(message) {
    try {
        const debugInfo = document.getElementById('debugInfo');
        debugInfo.textContent = `Debug: ${message}`;
    } catch (error) {
        
    }
}

window.addEventListener('scroll', updateScrollInfo);
window.addEventListener('DOMContentLoaded', setupScrollLogic);




//===========[] MODEL LOGIC  
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[popup]').forEach(modal => {
      const isOpen = modal.getAttribute('openview') === 'true';
      modal.style.display = isOpen ? 'block' : 'none';
  
      // Handle popstyle
      const popstyle = modal.getAttribute('popstyle');
      if (popstyle === 'fixed') {
        modal.style.position = 'fixed';
      } else if (popstyle === 'abs') {
        modal.style.position = 'absolute';
      }
  
      // Handle popindex
      const popindex = modal.getAttribute('popindex');
      modal.style.zIndex = popindex ? popindex : '5';
    });
  
    // OPEN popup
    document.querySelectorAll('[popup_opn]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetID = btn.getAttribute('popup_opn');
        const animClass = btn.getAttribute('popup_opn_ani');
        const target = document.querySelector(`[popup="${targetID}"]`);
        if (target) {
          target.style.display = 'block';
          if (animClass) {
            target.classList.add(animClass);
            setTimeout(() => {
              target.classList.remove(animClass);
            }, 500);
          }
          target.setAttribute('openview', 'true');
        }
      });
    });
  
    // CLOSE popup
    document.querySelectorAll('[popup_cls]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetID = btn.getAttribute('popup_cls');
        const animClass = btn.getAttribute('popup_cls_ani');
        const target = document.querySelector(`[popup="${targetID}"]`);
        if (target) {
          if (animClass) {
            target.classList.add(animClass);
            setTimeout(() => {
              target.classList.remove(animClass);
              target.style.display = 'none';
            }, 500);
          } else {
            target.style.display = 'none';
          }
          target.setAttribute('openview', 'false');
        }
      });
    });
  });
  
       function css_insert(css) {
              let styleTag = document.querySelector('head style[data-dynamic-css]');
            
              if (!styleTag) {
                styleTag = document.createElement('style');
                styleTag.setAttribute('data-dynamic-css', 'true');
                document.head.appendChild(styleTag);
              }
            
              styleTag.appendChild(document.createTextNode(css));
            }
            //entrance animation
            css_insert(`
  .scale-in-center{animation:scale-in-center .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-bl{animation:scale-in-bl .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-ver-center{animation:scale-in-ver-center .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-top{animation:scale-in-top .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-left{animation:scale-in-left .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-ver-top{animation:scale-in-ver-top .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-tr{animation:scale-in-tr .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-tl{animation:scale-in-tl .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-ver-bottom{animation:scale-in-ver-bottom .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-right{animation:scale-in-right .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-hor-center{animation:scale-in-hor-center .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-br{animation:scale-in-br .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-hor-left{animation:scale-in-hor-left .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-bottom{animation:scale-in-bottom .5s cubic-bezier(.25,.46,.45,.94) both}
  .scale-in-hor-right{animation:scale-in-hor-right .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-center{animation:rotate-in-center .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-bl{animation:rotate-in-bl .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-diag-2{animation:rotate-in-diag-2 .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-top{animation:rotate-in-top .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-left{animation:rotate-in-left .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-tr{animation:rotate-in-tr .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-tl{animation:rotate-in-tl .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-right{animation:rotate-in-right .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-hor{animation:rotate-in-hor .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-br{animation:rotate-in-br .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-ver{animation:rotate-in-ver .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-bottom{animation:rotate-in-bottom .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-diag-1{animation:rotate-in-diag-1 .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-cw{animation:rotate-in-2-cw .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-tr-cw{animation:rotate-in-2-tr-cw .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-tl-cw{animation:rotate-in-2-tl-cw .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-ccw{animation:rotate-in-2-ccw .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-tr-ccw{animation:rotate-in-2-tr-ccw .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-tl-ccw{animation:rotate-in-2-tl-ccw .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-fwd-cw{animation:rotate-in-2-fwd-cw .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-br-cw{animation:rotate-in-2-br-cw .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-fwd-ccw{animation:rotate-in-2-fwd-ccw .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-br-ccw{animation:rotate-in-2-br-ccw .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-bck-cw{animation:rotate-in-2-bck-cw .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-bl-cw{animation:rotate-in-2-bl-cw .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-bck-ccw{animation:rotate-in-2-bck-ccw .5s cubic-bezier(.25,.46,.45,.94) both}
  .rotate-in-2-bl-ccw{animation:rotate-in-2-bl-ccw .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-blurred-top{animation:slide-in-blurred-top .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-blurred-left{animation:slide-in-blurred-left .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-blurred-tr{animation:slide-in-blurred-tr .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-blurred-tl{animation:slide-in-blurred-tl .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-blurred-right{animation:slide-in-blurred-right .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-blurred-bottom{animation:slide-in-blurred-bottom .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-blurred-br{animation:slide-in-blurred-br .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-blurred-bl{animation:slide-in-blurred-bl .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-elliptic-top-fwd{animation:slide-in-elliptic-top-fwd .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-elliptic-left-fwd{animation:slide-in-elliptic-left-fwd .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-elliptic-top-bck{animation:slide-in-elliptic-top-bck .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-elliptic-left-bck{animation:slide-in-elliptic-left-bck .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-elliptic-right-fwd{animation:slide-in-elliptic-right-fwd .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-elliptic-right-bck{animation:slide-in-elliptic-right-bck .5s cubic-bezier(.25,.46,.45,.94) both}
  .slide-in-elliptic-bottom-fwd{animation:slide-in-elliptic-bottom-fwd .5s cubic-bezier(.25,.46,.45,.94) both}
  .swing-in-top-fwd{animation:swing-in-top-fwd .5s cubic-bezier(.25,.46,.45,.94) both}
  .swing-in-left-fwd{animation:swing-in-left-fwd .5s cubic-bezier(.25,.46,.45,.94) both}
  .swing-in-top-bck{animation:swing-in-top-bck .5s cubic-bezier(.25,.46,.45,.94) both}
  .swing-in-left-bck{animation:swing-in-left-bck .5s cubic-bezier(.25,.46,.45,.94) both}
  .swing-in-right-fwd{animation:swing-in-right-fwd .5s cubic-bezier(.25,.46,.45,.94) both}
  .swing-in-right-bck{animation:swing-in-right-bck .5s cubic-bezier(.25,.46,.45,.94) both}
  .swing-in-bottom-fwd{animation:swing-in-bottom-fwd .5s cubic-bezier(.25,.46,.45,.94) both}
  .swing-in-bottom-bck{animation:swing-in-bottom-bck .5s cubic-bezier(.25,.46,.45,.94) both}
  .fade-in{animation:fade-in .5s cubic-bezier(.25,.46,.45,.94) both}
  .fade-in-br{animation:fade-in-br .5s cubic-bezier(.25,.46,.45,.94) both}
  .fade-in-fwd{animation:fade-in-fwd .5s cubic-bezier(.25,.46,.45,.94) both}
  .fade-in-bottom{animation:fade-in-bottom .5s cubic-bezier(.25,.46,.45,.94) both}
  .fade-in-bck{animation:fade-in-bck .5s cubic-bezier(.25,.46,.45,.94) both}
  .fade-in-bl{animation:fade-in-bl .5s cubic-bezier(.25,.46,.45,.94) both}
  .fade-in-top{animation:fade-in-top .5s cubic-bezier(.25,.46,.45,.94) both}
  .fade-in-left{animation:fade-in-left .5s cubic-bezier(.25,.46,.45,.94) both}
  .fade-in-tr{animation:fade-in-tr .5s cubic-bezier(.25,.46,.45,.94) both}
  .fade-in-tl{animation:fade-in-tl .5s cubic-bezier(.25,.46,.45,.94) both}
  .fade-in-right{animation:fade-in-right .5s cubic-bezier(.25,.46,.45,.94) both}
  
  
  @-webkit-keyframes scale-in-center{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes scale-in-center{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}
  @-webkit-keyframes scale-in-bl{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}@keyframes scale-in-bl{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}
  @-webkit-keyframes scale-in-ver-center{0%{-webkit-transform:scaleY(0);transform:scaleY(0);opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1}}@keyframes scale-in-ver-center{0%{-webkit-transform:scaleY(0);transform:scaleY(0);opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1}}
  @-webkit-keyframes scale-in-top{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}}@keyframes scale-in-top{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}}
  @-webkit-keyframes scale-in-left{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 50%;transform-origin:0 50%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 50%;transform-origin:0 50%;opacity:1}}@keyframes scale-in-left{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 50%;transform-origin:0 50%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 50%;transform-origin:0 50%;opacity:1}}
  @-webkit-keyframes scale-in-ver-top{0%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}@keyframes scale-in-ver-top{0%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}
  @-webkit-keyframes scale-in-tr{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}@keyframes scale-in-tr{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}
  @-webkit-keyframes scale-in-tl{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}@keyframes scale-in-tl{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}
  @-webkit-keyframes scale-in-ver-bottom{0%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}@keyframes scale-in-ver-bottom{0%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}
  @-webkit-keyframes scale-in-right{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}}@keyframes scale-in-right{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}}
  @-webkit-keyframes scale-in-hor-center{0%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:1}100%{-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}}@keyframes scale-in-hor-center{0%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:1}100%{-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}}
  @-webkit-keyframes scale-in-br{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}@keyframes scale-in-br{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}
  @-webkit-keyframes scale-in-hor-left{0%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}@keyframes scale-in-hor-left{0%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}
  @-webkit-keyframes scale-in-bottom{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}}@keyframes scale-in-bottom{0%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}}
  @-webkit-keyframes scale-in-hor-right{0%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}@keyframes scale-in-hor-right{0%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}
  @-webkit-keyframes rotate-in-center{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotate-in-center{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}
  @-webkit-keyframes rotate-in-bl{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:bottom left;transform-origin:bottom left;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:bottom left;transform-origin:bottom left;opacity:1}}@keyframes rotate-in-bl{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:bottom left;transform-origin:bottom left;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:bottom left;transform-origin:bottom left;opacity:1}}
  @-webkit-keyframes rotate-in-diag-2{0%{-webkit-transform:rotate3d(-1,1,0,-360deg);transform:rotate3d(-1,1,0,-360deg);opacity:0}100%{-webkit-transform:rotate3d(-1,1,0,0deg);transform:rotate3d(-1,1,0,0deg);opacity:1}}@keyframes rotate-in-diag-2{0%{-webkit-transform:rotate3d(-1,1,0,-360deg);transform:rotate3d(-1,1,0,-360deg);opacity:0}100%{-webkit-transform:rotate3d(-1,1,0,0deg);transform:rotate3d(-1,1,0,0deg);opacity:1}}
  @-webkit-keyframes rotate-in-top{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}@keyframes rotate-in-top{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}
  @-webkit-keyframes rotate-in-left{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:left;transform-origin:left;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:left;transform-origin:left;opacity:1}}@keyframes rotate-in-left{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:left;transform-origin:left;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:left;transform-origin:left;opacity:1}}
  @-webkit-keyframes rotate-in-tr{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:top right;transform-origin:top right;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:top right;transform-origin:top right;opacity:1}}@keyframes rotate-in-tr{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:top right;transform-origin:top right;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:top right;transform-origin:top right;opacity:1}}
  @-webkit-keyframes rotate-in-tl{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:top left;transform-origin:top left;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:top left;transform-origin:top left;opacity:1}}@keyframes rotate-in-tl{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:top left;transform-origin:top left;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:top left;transform-origin:top left;opacity:1}}
  @-webkit-keyframes rotate-in-right{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:right;transform-origin:right;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:right;transform-origin:right;opacity:1}}@keyframes rotate-in-right{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:right;transform-origin:right;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:right;transform-origin:right;opacity:1}}
  @-webkit-keyframes rotate-in-hor{0%{-webkit-transform:rotateX(360deg);transform:rotateX(360deg);opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes rotate-in-hor{0%{-webkit-transform:rotateX(360deg);transform:rotateX(360deg);opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}
  @-webkit-keyframes rotate-in-br{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:bottom right;transform-origin:bottom right;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:bottom right;transform-origin:bottom right;opacity:1}}@keyframes rotate-in-br{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:bottom right;transform-origin:bottom right;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:bottom right;transform-origin:bottom right;opacity:1}}
  @-webkit-keyframes rotate-in-ver{0%{-webkit-transform:rotateY(-360deg);transform:rotateY(-360deg);opacity:0}100%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg);opacity:1}}@keyframes rotate-in-ver{0%{-webkit-transform:rotateY(-360deg);transform:rotateY(-360deg);opacity:0}100%{-webkit-transform:rotateY(0deg);transform:rotateY(0deg);opacity:1}}
  @-webkit-keyframes rotate-in-bottom{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}@keyframes rotate-in-bottom{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}
  @-webkit-keyframes rotate-in-diag-1{0%{-webkit-transform:rotate3d(1,1,0,-360deg);transform:rotate3d(1,1,0,-360deg);opacity:0}100%{-webkit-transform:rotate3d(1,1,0,0deg);transform:rotate3d(1,1,0,0deg);opacity:1}}@keyframes rotate-in-diag-1{0%{-webkit-transform:rotate3d(1,1,0,-360deg);transform:rotate3d(1,1,0,-360deg);opacity:0}100%{-webkit-transform:rotate3d(1,1,0,0deg);transform:rotate3d(1,1,0,0deg);opacity:1}}
  @-webkit-keyframes rotate-in-2-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotate-in-2-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}
  @-webkit-keyframes rotate-in-2-tr-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}@keyframes rotate-in-2-tr-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}
  @-webkit-keyframes rotate-in-2-tl-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}@keyframes rotate-in-2-tl-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}
  @-webkit-keyframes rotate-in-2-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotate-in-2-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}
  @-webkit-keyframes rotate-in-2-tr-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}@keyframes rotate-in-2-tr-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}
  @-webkit-keyframes rotate-in-2-tl-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}@keyframes rotate-in-2-tl-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}
  @-webkit-keyframes rotate-in-2-fwd-cw{0%{-webkit-transform:translateZ(-200px) rotate(-45deg);transform:translateZ(-200px) rotate(-45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}@keyframes rotate-in-2-fwd-cw{0%{-webkit-transform:translateZ(-200px) rotate(-45deg);transform:translateZ(-200px) rotate(-45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}
  @-webkit-keyframes rotate-in-2-br-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}@keyframes rotate-in-2-br-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}
  @-webkit-keyframes rotate-in-2-fwd-ccw{0%{-webkit-transform:translateZ(-200px) rotate(45deg);transform:translateZ(-200px) rotate(45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}@keyframes rotate-in-2-fwd-ccw{0%{-webkit-transform:translateZ(-200px) rotate(45deg);transform:translateZ(-200px) rotate(45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}
  @-webkit-keyframes rotate-in-2-br-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}@keyframes rotate-in-2-br-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}
  @-webkit-keyframes rotate-in-2-bck-cw{0%{-webkit-transform:translateZ(200px) rotate(-45deg);transform:translateZ(200px) rotate(-45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}@keyframes rotate-in-2-bck-cw{0%{-webkit-transform:translateZ(200px) rotate(-45deg);transform:translateZ(200px) rotate(-45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}
  @-webkit-keyframes rotate-in-2-bl-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}@keyframes rotate-in-2-bl-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}
  @-webkit-keyframes rotate-in-2-bck-ccw{0%{-webkit-transform:translateZ(200px) rotate(45deg);transform:translateZ(200px) rotate(45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}@keyframes rotate-in-2-bck-ccw{0%{-webkit-transform:translateZ(200px) rotate(45deg);transform:translateZ(200px) rotate(45deg);opacity:0}100%{-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0);opacity:1}}
  @-webkit-keyframes rotate-in-2-bl-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}@keyframes rotate-in-2-bl-ccw{0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}
  @-webkit-keyframes slide-in-blurred-top{0%{-webkit-transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform:translateY(-1000px) scaleY(2.5) scaleX(.2);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-top{0%{-webkit-transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform:translateY(-1000px) scaleY(2.5) scaleX(.2);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}
  @-webkit-keyframes slide-in-blurred-left{0%{-webkit-transform:translateX(-1000px) scaleX(2.5) scaleY(.2);transform:translateX(-1000px) scaleX(2.5) scaleY(.2);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateX(0) scaleY(1) scaleX(1);transform:translateX(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-left{0%{-webkit-transform:translateX(-1000px) scaleX(2.5) scaleY(.2);transform:translateX(-1000px) scaleX(2.5) scaleY(.2);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateX(0) scaleY(1) scaleX(1);transform:translateX(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}
  @-webkit-keyframes slide-in-blurred-tr{0%{-webkit-transform:translate(1000px,-1000px) skew(-80deg,-10deg);transform:translate(1000px,-1000px) skew(-80deg,-10deg);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-tr{0%{-webkit-transform:translate(1000px,-1000px) skew(-80deg,-10deg);transform:translate(1000px,-1000px) skew(-80deg,-10deg);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}
  @-webkit-keyframes slide-in-blurred-tl{0%{-webkit-transform:translate(-1000px,-1000px) skew(80deg,10deg);transform:translate(-1000px,-1000px) skew(80deg,10deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-tl{0%{-webkit-transform:translate(-1000px,-1000px) skew(80deg,10deg);transform:translate(-1000px,-1000px) skew(80deg,10deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}
  @-webkit-keyframes slide-in-blurred-right{0%{-webkit-transform:translateX(1000px) scaleX(2.5) scaleY(.2);transform:translateX(1000px) scaleX(2.5) scaleY(.2);-webkit-transform-origin:0 50%;transform-origin:0 50%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateX(0) scaleY(1) scaleX(1);transform:translateX(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-right{0%{-webkit-transform:translateX(1000px) scaleX(2.5) scaleY(.2);transform:translateX(1000px) scaleX(2.5) scaleY(.2);-webkit-transform-origin:0 50%;transform-origin:0 50%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateX(0) scaleY(1) scaleX(1);transform:translateX(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}
  @-webkit-keyframes slide-in-blurred-bottom{0%{-webkit-transform:translateY(1000px) scaleY(2.5) scaleX(.2);transform:translateY(1000px) scaleY(2.5) scaleX(.2);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-bottom{0%{-webkit-transform:translateY(1000px) scaleY(2.5) scaleX(.2);transform:translateY(1000px) scaleY(2.5) scaleX(.2);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}
  @-webkit-keyframes slide-in-blurred-br{0%{-webkit-transform:translate(1000px,1000px) skew(80deg,10deg);transform:translate(1000px,1000px) skew(80deg,10deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-br{0%{-webkit-transform:translate(1000px,1000px) skew(80deg,10deg);transform:translate(1000px,1000px) skew(80deg,10deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}
  @-webkit-keyframes slide-in-blurred-bl{0%{-webkit-transform:translate(-1000px,1000px) skew(-80deg,-10deg);transform:translate(-1000px,1000px) skew(-80deg,-10deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes slide-in-blurred-bl{0%{-webkit-transform:translate(-1000px,1000px) skew(-80deg,-10deg);transform:translate(-1000px,1000px) skew(-80deg,-10deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}100%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}}
  @-webkit-keyframes slide-in-elliptic-top-fwd{0%{-webkit-transform:translateY(-600px) rotateX(-30deg) scale(0);transform:translateY(-600px) rotateX(-30deg) scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% 1400px;transform-origin:50% 1400px;opacity:1}}@keyframes slide-in-elliptic-top-fwd{0%{-webkit-transform:translateY(-600px) rotateX(-30deg) scale(0);transform:translateY(-600px) rotateX(-30deg) scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% 1400px;transform-origin:50% 1400px;opacity:1}}
  @-webkit-keyframes slide-in-elliptic-left-fwd{0%{-webkit-transform:translateX(-800px) rotateY(30deg) scale(0);transform:translateX(-800px) rotateY(30deg) scale(0);-webkit-transform-origin:-100% 50%;transform-origin:-100% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:1800px 50%;transform-origin:1800px 50%;opacity:1}}@keyframes slide-in-elliptic-left-fwd{0%{-webkit-transform:translateX(-800px) rotateY(30deg) scale(0);transform:translateX(-800px) rotateY(30deg) scale(0);-webkit-transform-origin:-100% 50%;transform-origin:-100% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:1800px 50%;transform-origin:1800px 50%;opacity:1}}
  @-webkit-keyframes slide-in-elliptic-top-bck{0%{-webkit-transform:translateY(-600px) rotateX(30deg) scale(6.5);transform:translateY(-600px) rotateX(30deg) scale(6.5);-webkit-transform-origin:50% 200%;transform-origin:50% 200%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% -500px;transform-origin:50% -500px;opacity:1}}@keyframes slide-in-elliptic-top-bck{0%{-webkit-transform:translateY(-600px) rotateX(30deg) scale(6.5);transform:translateY(-600px) rotateX(30deg) scale(6.5);-webkit-transform-origin:50% 200%;transform-origin:50% 200%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% -500px;transform-origin:50% -500px;opacity:1}}
  @-webkit-keyframes slide-in-elliptic-left-bck{0%{-webkit-transform:translateX(-800px) rotateY(-30deg) scale(6.5);transform:translateX(-800px) rotateY(-30deg) scale(6.5);-webkit-transform-origin:200% 50%;transform-origin:200% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:-600px 50%;transform-origin:-600px 50%;opacity:1}}@keyframes slide-in-elliptic-left-bck{0%{-webkit-transform:translateX(-800px) rotateY(-30deg) scale(6.5);transform:translateX(-800px) rotateY(-30deg) scale(6.5);-webkit-transform-origin:200% 50%;transform-origin:200% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:-600px 50%;transform-origin:-600px 50%;opacity:1}}
  @-webkit-keyframes slide-in-elliptic-right-fwd{0%{-webkit-transform:translateX(800px) rotateY(-30deg) scale(0);transform:translateX(800px) rotateY(-30deg) scale(0);-webkit-transform-origin:-100% 50%;transform-origin:-100% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:-1800px 50%;transform-origin:-1800px 50%;opacity:1}}@keyframes slide-in-elliptic-right-fwd{0%{-webkit-transform:translateX(800px) rotateY(-30deg) scale(0);transform:translateX(800px) rotateY(-30deg) scale(0);-webkit-transform-origin:-100% 50%;transform-origin:-100% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:-1800px 50%;transform-origin:-1800px 50%;opacity:1}}
  @-webkit-keyframes slide-in-elliptic-right-bck{0%{-webkit-transform:translateX(800px) rotateY(30deg) scale(6.5);transform:translateX(800px) rotateY(30deg) scale(6.5);-webkit-transform-origin:-100% 50%;transform-origin:-100% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:600px 50%;transform-origin:600px 50%;opacity:1}}@keyframes slide-in-elliptic-right-bck{0%{-webkit-transform:translateX(800px) rotateY(30deg) scale(6.5);transform:translateX(800px) rotateY(30deg) scale(6.5);-webkit-transform-origin:-100% 50%;transform-origin:-100% 50%;opacity:0}100%{-webkit-transform:translateX(0) rotateY(0) scale(1);transform:translateX(0) rotateY(0) scale(1);-webkit-transform-origin:600px 50%;transform-origin:600px 50%;opacity:1}}
  @-webkit-keyframes slide-in-elliptic-bottom-fwd{0%{-webkit-transform:translateY(600px) rotateX(30deg) scale(0);transform:translateY(600px) rotateX(30deg) scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% -1400px;transform-origin:50% -1400px;opacity:1}}@keyframes slide-in-elliptic-bottom-fwd{0%{-webkit-transform:translateY(600px) rotateX(30deg) scale(0);transform:translateY(600px) rotateX(30deg) scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% -1400px;transform-origin:50% -1400px;opacity:1}}
  @-webkit-keyframes swing-in-top-fwd{0%{-webkit-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}@keyframes swing-in-top-fwd{0%{-webkit-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}
  @-webkit-keyframes swing-in-left-fwd{0%{-webkit-transform:rotateY(100deg);transform:rotateY(100deg);-webkit-transform-origin:left;transform-origin:left;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:left;transform-origin:left;opacity:1}}@keyframes swing-in-left-fwd{0%{-webkit-transform:rotateY(100deg);transform:rotateY(100deg);-webkit-transform-origin:left;transform-origin:left;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:left;transform-origin:left;opacity:1}}
  @-webkit-keyframes swing-in-top-bck{0%{-webkit-transform:rotateX(70deg);transform:rotateX(70deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}@keyframes swing-in-top-bck{0%{-webkit-transform:rotateX(70deg);transform:rotateX(70deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);-webkit-transform-origin:top;transform-origin:top;opacity:1}}
  @-webkit-keyframes swing-in-left-bck{0%{-webkit-transform:rotateY(-70deg);transform:rotateY(-70deg);-webkit-transform-origin:left;transform-origin:left;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:left;transform-origin:left;opacity:1}}@keyframes swing-in-left-bck{0%{-webkit-transform:rotateY(-70deg);transform:rotateY(-70deg);-webkit-transform-origin:left;transform-origin:left;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:left;transform-origin:left;opacity:1}}
  @-webkit-keyframes swing-in-right-fwd{0%{-webkit-transform:rotateY(-100deg);transform:rotateY(-100deg);-webkit-transform-origin:right;transform-origin:right;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:right;transform-origin:right;opacity:1}}@keyframes swing-in-right-fwd{0%{-webkit-transform:rotateY(-100deg);transform:rotateY(-100deg);-webkit-transform-origin:right;transform-origin:right;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:right;transform-origin:right;opacity:1}}
  @-webkit-keyframes swing-in-right-bck{0%{-webkit-transform:rotateY(70deg);transform:rotateY(70deg);-webkit-transform-origin:right;transform-origin:right;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:right;transform-origin:right;opacity:1}}@keyframes swing-in-right-bck{0%{-webkit-transform:rotateY(70deg);transform:rotateY(70deg);-webkit-transform-origin:right;transform-origin:right;opacity:0}100%{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:right;transform-origin:right;opacity:1}}
  @-webkit-keyframes swing-in-bottom-fwd{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}@keyframes swing-in-bottom-fwd{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}
  @-webkit-keyframes swing-in-bottom-bck{0%{-webkit-transform:rotateX(-70deg);transform:rotateX(-70deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}@keyframes swing-in-bottom-bck{0%{-webkit-transform:rotateX(-70deg);transform:rotateX(-70deg);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:bottom;transform-origin:bottom;opacity:1}}
  @-webkit-keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}
  @-webkit-keyframes fade-in-br{0%{-webkit-transform:translateX(50px) translateY(50px);transform:translateX(50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-br{0%{-webkit-transform:translateX(50px) translateY(50px);transform:translateX(50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}
  @-webkit-keyframes fade-in-fwd{0%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes fade-in-fwd{0%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}
  @-webkit-keyframes fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}
  @-webkit-keyframes fade-in-bck{0%{-webkit-transform:translateZ(80px);transform:translateZ(80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes fade-in-bck{0%{-webkit-transform:translateZ(80px);transform:translateZ(80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}
  @-webkit-keyframes fade-in-bl{0%{-webkit-transform:translateX(-50px) translateY(50px);transform:translateX(-50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-bl{0%{-webkit-transform:translateX(-50px) translateY(50px);transform:translateX(-50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}
  @-webkit-keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}
  @-webkit-keyframes fade-in-left{0%{-webkit-transform:translateX(-50px);transform:translateX(-50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes fade-in-left{0%{-webkit-transform:translateX(-50px);transform:translateX(-50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}
  @-webkit-keyframes fade-in-tr{0%{-webkit-transform:translateX(50px) translateY(-50px);transform:translateX(50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-tr{0%{-webkit-transform:translateX(50px) translateY(-50px);transform:translateX(50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}
  @-webkit-keyframes fade-in-tl{0%{-webkit-transform:translateX(-50px) translateY(-50px);transform:translateX(-50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-tl{0%{-webkit-transform:translateX(-50px) translateY(-50px);transform:translateX(-50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}
  @-webkit-keyframes fade-in-right{0%{-webkit-transform:translateX(50px);transform:translateX(50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes fade-in-right{0%{-webkit-transform:translateX(50px);transform:translateX(50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}
  /*[IN]  ====================================*/
            `);
  // out animation
            css_insert(`
  
  /*[OUT]  ===================================*/
  .scale-out-center{animation:scale-out-center .5s cubic-bezier(.55,.085,.68,.53) both}
  .scale-out-vertical{animation:scale-out-vertical .5s cubic-bezier(.55,.085,.68,.53) both}
  .scale-out-bl{animation:scale-out-bl .5s cubic-bezier(.55,.085,.68,.53) both}
  .scale-out-top{animation:scale-out-top .5s cubic-bezier(.55,.085,.68,.53) both}
  .scale-out-ver-top{animation:scale-out-ver-top .5s cubic-bezier(.55,.085,.68,.53) both}
  .scale-out-tr{animation:scale-out-tr .5s cubic-bezier(.55,.085,.68,.53) both}
  .scale-out-tl{animation:scale-out-tl .5s cubic-bezier(.55,.085,.68,.53) both}
  .scale-out-right{animation:scale-out-right .5s cubic-bezier(.55,.085,.68,.53) both}
  .scale-out-horizontal{animation:scale-out-horizontal .5s cubic-bezier(.55,.085,.68,.53) both}
  .scale-out-br{animation:scale-out-br .5s cubic-bezier(.55,.085,.68,.53) both}
  .scale-out-hor-left{animation:scale-out-hor-left .5s cubic-bezier(.55,.085,.68,.53) both}
  .scale-out-bottom{animation:scale-out-bottom .5s cubic-bezier(.55,.085,.68,.53) both}
  .scale-out-hor-right{animation:scale-out-hor-right .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-top{animation:slide-out-top .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-left{animation:slide-out-left .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-tr{animation:slide-out-tr .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-tl{animation:slide-out-tl .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-right{animation:slide-out-right .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-br{animation:slide-out-br .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-bottom{animation:slide-out-bottom .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-bl{animation:slide-out-bl .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-bck-center{animation:slide-out-bck-center .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-bck-bl{animation:slide-out-bck-bl .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-bck-left{animation:slide-out-bck-left .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-bck-top{animation:slide-out-bck-top .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-bck-tr{animation:slide-out-bck-tr .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-bck-tl{animation:slide-out-bck-tl .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-bck-right{animation:slide-out-bck-right .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-bck-br{animation:slide-out-bck-br .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-bck-bottom{animation:slide-out-bck-bottom .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-fwd-center{animation:slide-out-fwd-center .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-fwd-bl{animation:slide-out-fwd-bl .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-fwd-top{animation:slide-out-fwd-top .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-fwd-left{animation:slide-out-fwd-left .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-fwd-tr{animation:slide-out-fwd-tr .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-fwd-tl{animation:slide-out-fwd-tl .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-fwd-right{animation:slide-out-fwd-right .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-fwd-br{animation:slide-out-fwd-br .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-fwd-bottom{animation:slide-out-fwd-bottom .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-blurred-top{animation:slide-out-blurred-top .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-blurred-left{animation:slide-out-blurred-left .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-blurred-tr{animation:slide-out-blurred-tr .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-blurred-tl{animation:slide-out-blurred-tl .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-blurred-br{animation:slide-out-blurred-br .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-blurred-bottom{animation:slide-out-blurred-bottom .5s cubic-bezier(.55,.085,.68,.53) both}
  .slide-out-blurred-bl{animation:slide-out-blurred-bl .5s cubic-bezier(.55,.085,.68,.53) both}
  
  
  @-webkit-keyframes scale-out-center{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);opacity:1}}@keyframes scale-out-center{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);opacity:1}}
  @-webkit-keyframes scale-out-vertical{0%{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1}100%{-webkit-transform:scaleY(0);transform:scaleY(0);opacity:1}}@keyframes scale-out-vertical{0%{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1}100%{-webkit-transform:scaleY(0);transform:scaleY(0);opacity:1}}
  @-webkit-keyframes scale-out-bl{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}@keyframes scale-out-bl{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}
  @-webkit-keyframes scale-out-top{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}}@keyframes scale-out-top{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:1}}
  @-webkit-keyframes scale-out-ver-top{0%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}@keyframes scale-out-ver-top{0%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}
  @-webkit-keyframes scale-out-tr{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}@keyframes scale-out-tr{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 0;transform-origin:100% 0;opacity:1}}
  @-webkit-keyframes scale-out-tl{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}@keyframes scale-out-tl{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}
  @-webkit-keyframes scale-out-right{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}}@keyframes scale-out-right{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;opacity:1}}
  @-webkit-keyframes scale-out-horizontal{0%{-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}100%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:1}}@keyframes scale-out-horizontal{0%{-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}100%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:1}}
  @-webkit-keyframes scale-out-br{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}@keyframes scale-out-br{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}
  @-webkit-keyframes scale-out-hor-left{0%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}@keyframes scale-out-hor-left{0%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}100%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 0;transform-origin:0 0;opacity:1}}
  @-webkit-keyframes scale-out-bottom{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}}@keyframes scale-out-bottom{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:1}}
  @-webkit-keyframes scale-out-hor-right{0%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}@keyframes scale-out-hor-right{0%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}100%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;opacity:1}}
  @-webkit-keyframes slide-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}}@keyframes slide-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}}
  @-webkit-keyframes slide-out-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}100%{-webkit-transform:translateX(-1000px);transform:translateX(-1000px);opacity:0}}@keyframes slide-out-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}100%{-webkit-transform:translateX(-1000px);transform:translateX(-1000px);opacity:0}}
  @-webkit-keyframes slide-out-tr{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(-1000px) translateX(1000px);transform:translateY(-1000px) translateX(1000px);opacity:0}}@keyframes slide-out-tr{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(-1000px) translateX(1000px);transform:translateY(-1000px) translateX(1000px);opacity:0}}
  @-webkit-keyframes slide-out-tl{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(-1000px) translateX(-1000px);transform:translateY(-1000px) translateX(-1000px);opacity:0}}@keyframes slide-out-tl{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(-1000px) translateX(-1000px);transform:translateY(-1000px) translateX(-1000px);opacity:0}}
  @-webkit-keyframes slide-out-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}100%{-webkit-transform:translateX(1000px);transform:translateX(1000px);opacity:0}}@keyframes slide-out-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}100%{-webkit-transform:translateX(1000px);transform:translateX(1000px);opacity:0}}
  @-webkit-keyframes slide-out-br{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(1000px) translateX(1000px);transform:translateY(1000px) translateX(1000px);opacity:0}}@keyframes slide-out-br{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(1000px) translateX(1000px);transform:translateY(1000px) translateX(1000px);opacity:0}}
  @-webkit-keyframes slide-out-bottom{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(1000px);transform:translateY(1000px);opacity:0}}@keyframes slide-out-bottom{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(1000px);transform:translateY(1000px);opacity:0}}
  @-webkit-keyframes slide-out-bl{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(1000px) translateX(-1000px);transform:translateY(1000px) translateX(-1000px);opacity:0}}@keyframes slide-out-bl{0%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateY(1000px) translateX(-1000px);transform:translateY(1000px) translateX(-1000px);opacity:0}}
  @-webkit-keyframes slide-out-bck-center{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}100%{-webkit-transform:translateZ(-1100px);transform:translateZ(-1100px);opacity:0}}@keyframes slide-out-bck-center{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}100%{-webkit-transform:translateZ(-1100px);transform:translateZ(-1100px);opacity:0}}
  @-webkit-keyframes slide-out-bck-bl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(1000px) translateX(-1000px);transform:translateZ(-1100px) translateY(1000px) translateX(-1000px);opacity:0}}@keyframes slide-out-bck-bl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(1000px) translateX(-1000px);transform:translateZ(-1100px) translateY(1000px) translateX(-1000px);opacity:0}}
  @-webkit-keyframes slide-out-bck-left{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateX(-1000px);transform:translateZ(-1100px) translateX(-1000px);opacity:0}}@keyframes slide-out-bck-left{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateX(-1000px);transform:translateZ(-1100px) translateX(-1000px);opacity:0}}
  @-webkit-keyframes slide-out-bck-top{0%{-webkit-transform:translateZ(1) translateY(0);transform:translateZ(1) translateY(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(-1000px);transform:translateZ(-1100px) translateY(-1000px);opacity:0}}@keyframes slide-out-bck-top{0%{-webkit-transform:translateZ(1) translateY(0);transform:translateZ(1) translateY(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(-1000px);transform:translateZ(-1100px) translateY(-1000px);opacity:0}}
  @-webkit-keyframes slide-out-bck-tr{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(-1000px) translateX(1000px);transform:translateZ(-1100px) translateY(-1000px) translateX(1000px);opacity:0}}@keyframes slide-out-bck-tr{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(-1000px) translateX(1000px);transform:translateZ(-1100px) translateY(-1000px) translateX(1000px);opacity:0}}
  @-webkit-keyframes slide-out-bck-tl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(-1000px) translateX(-1000px);transform:translateZ(-1100px) translateY(-1000px) translateX(-1000px);opacity:0}}@keyframes slide-out-bck-tl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(-1000px) translateX(-1000px);transform:translateZ(-1100px) translateY(-1000px) translateX(-1000px);opacity:0}}
  @-webkit-keyframes slide-out-bck-right{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateX(1000px);transform:translateZ(-1100px) translateX(1000px);opacity:0}}@keyframes slide-out-bck-right{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateX(1000px);transform:translateZ(-1100px) translateX(1000px);opacity:0}}
  @-webkit-keyframes slide-out-bck-br{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(1000px) translateX(1000px);transform:translateZ(-1100px) translateY(1000px) translateX(1000px);opacity:0}}@keyframes slide-out-bck-br{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(1000px) translateX(1000px);transform:translateZ(-1100px) translateY(1000px) translateX(1000px);opacity:0}}
  @-webkit-keyframes slide-out-bck-bottom{0%{-webkit-transform:translateZ(0) translateY(0);transform:translateZ(0) translateY(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(1000px);transform:translateZ(-1100px) translateY(1000px);opacity:0}}@keyframes slide-out-bck-bottom{0%{-webkit-transform:translateZ(0) translateY(0);transform:translateZ(0) translateY(0);opacity:1}100%{-webkit-transform:translateZ(-1100px) translateY(1000px);transform:translateZ(-1100px) translateY(1000px);opacity:0}}
  @-webkit-keyframes slide-out-fwd-center{0%{-webkit-transform:translateZ(1);transform:translateZ(1);opacity:1}100%{-webkit-transform:translateZ(600px);transform:translateZ(600px);opacity:0}}@keyframes slide-out-fwd-center{0%{-webkit-transform:translateZ(1);transform:translateZ(1);opacity:1}100%{-webkit-transform:translateZ(600px);transform:translateZ(600px);opacity:0}}
  @-webkit-keyframes slide-out-fwd-bl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(300px) translateX(-400px);transform:translateZ(600px) translateY(300px) translateX(-400px);opacity:0}}@keyframes slide-out-fwd-bl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(300px) translateX(-400px);transform:translateZ(600px) translateY(300px) translateX(-400px);opacity:0}}
  @-webkit-keyframes slide-out-fwd-top{0%{-webkit-transform:translateZ(1) translateY(0);transform:translateZ(1) translateY(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(-300px);transform:translateZ(600px) translateY(-300px);opacity:0}}@keyframes slide-out-fwd-top{0%{-webkit-transform:translateZ(1) translateY(0);transform:translateZ(1) translateY(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(-300px);transform:translateZ(600px) translateY(-300px);opacity:0}}
  @-webkit-keyframes slide-out-fwd-left{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateX(-400px);transform:translateZ(600px) translateX(-400px);opacity:0}}@keyframes slide-out-fwd-left{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateX(-400px);transform:translateZ(600px) translateX(-400px);opacity:0}}
  @-webkit-keyframes slide-out-fwd-tr{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(-300px) translateX(400px);transform:translateZ(600px) translateY(-300px) translateX(400px);opacity:0}}@keyframes slide-out-fwd-tr{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(-300px) translateX(400px);transform:translateZ(600px) translateY(-300px) translateX(400px);opacity:0}}
  @-webkit-keyframes slide-out-fwd-tl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(-300px) translateX(-400px);transform:translateZ(600px) translateY(-300px) translateX(-400px);opacity:0}}@keyframes slide-out-fwd-tl{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(-300px) translateX(-400px);transform:translateZ(600px) translateY(-300px) translateX(-400px);opacity:0}}
  @-webkit-keyframes slide-out-fwd-right{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateX(400px);transform:translateZ(600px) translateX(400px);opacity:0}}@keyframes slide-out-fwd-right{0%{-webkit-transform:translateZ(0) translateX(0);transform:translateZ(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateX(400px);transform:translateZ(600px) translateX(400px);opacity:0}}
  @-webkit-keyframes slide-out-fwd-br{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(300px) translateX(400px);transform:translateZ(600px) translateY(300px) translateX(400px);opacity:0}}@keyframes slide-out-fwd-br{0%{-webkit-transform:translateZ(0) translateY(0) translateX(0);transform:translateZ(0) translateY(0) translateX(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(300px) translateX(400px);transform:translateZ(600px) translateY(300px) translateX(400px);opacity:0}}
  @-webkit-keyframes slide-out-fwd-bottom{0%{-webkit-transform:translateZ(0) translateY(0);transform:translateZ(0) translateY(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(300px);transform:translateZ(600px) translateY(300px);opacity:0}}@keyframes slide-out-fwd-bottom{0%{-webkit-transform:translateZ(0) translateY(0);transform:translateZ(0) translateY(0);opacity:1}100%{-webkit-transform:translateZ(600px) translateY(300px);transform:translateZ(600px) translateY(300px);opacity:0}}
  @-webkit-keyframes slide-out-blurred-top{0%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateY(-1000px) scaleY(2) scaleX(.2);transform:translateY(-1000px) scaleY(2) scaleX(.2);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-top{0%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateY(-1000px) scaleY(2) scaleX(.2);transform:translateY(-1000px) scaleY(2) scaleX(.2);-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}
  @-webkit-keyframes slide-out-blurred-left{0%{-webkit-transform:translateX(0) scaleY(1) scaleX(1);transform:translateX(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateX(-1000px) scaleX(2) scaleY(.2);transform:translateX(-1000px) scaleX(2) scaleY(.2);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-left{0%{-webkit-transform:translateX(0) scaleY(1) scaleX(1);transform:translateX(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateX(-1000px) scaleX(2) scaleY(.2);transform:translateX(-1000px) scaleX(2) scaleY(.2);-webkit-transform-origin:100% 50%;transform-origin:100% 50%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}
  @-webkit-keyframes slide-out-blurred-tr{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(1000px,-1000px) skew(-80deg,-10deg);transform:translate(1000px,-1000px) skew(-80deg,-10deg);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-tr{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(1000px,-1000px) skew(-80deg,-10deg);transform:translate(1000px,-1000px) skew(-80deg,-10deg);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}
  @-webkit-keyframes slide-out-blurred-tl{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(-1000px,-1000px) skew(80deg,10deg);transform:translate(-1000px,-1000px) skew(80deg,10deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-tl{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(-1000px,-1000px) skew(80deg,10deg);transform:translate(-1000px,-1000px) skew(80deg,10deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}
  @-webkit-keyframes slide-out-blurred-br{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(1000px,1000px) skew(80deg,10deg);transform:translate(1000px,1000px) skew(80deg,10deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-br{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(1000px,1000px) skew(80deg,10deg);transform:translate(1000px,1000px) skew(80deg,10deg);-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}
  @-webkit-keyframes slide-out-blurred-bottom{0%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateY(1000px) scaleY(2) scaleX(.2);transform:translateY(1000px) scaleY(2) scaleX(.2);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-bottom{0%{-webkit-transform:translateY(0) scaleY(1) scaleX(1);transform:translateY(0) scaleY(1) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translateY(1000px) scaleY(2) scaleX(.2);transform:translateY(1000px) scaleY(2) scaleX(.2);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}
  @-webkit-keyframes slide-out-blurred-bl{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(-1000px,1000px) skew(-80deg,-10deg);transform:translate(-1000px,1000px) skew(-80deg,-10deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}@keyframes slide-out-blurred-bl{0%{-webkit-transform:translate(0,0) skew(0deg,0deg);transform:translate(0,0) skew(0deg,0deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-filter:blur(0);filter:blur(0);opacity:1}100%{-webkit-transform:translate(-1000px,1000px) skew(-80deg,-10deg);transform:translate(-1000px,1000px) skew(-80deg,-10deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;-webkit-filter:blur(40px);filter:blur(40px);opacity:0}}
  
            `);





//===========[] SCREEN RESIZE LOGIC
const attrConditions = new Map();

function attr_size_changer(element, selector, targetSize, newAttributeValue) {
  const attrName = getAttributeNameFromSelector(selector);
  if (!attrName) return;

  if (!attrConditions.has(element)) {
    attrConditions.set(element, {});
  }

  const elConditions = attrConditions.get(element);

  if (!(attrName in elConditions)) {
    const backupAttr = `data-orig-${attrName}`;
    const originalValue = element.getAttribute(backupAttr) || element.getAttribute(attrName);

    // Store original
    element.setAttribute(backupAttr, originalValue);
    elConditions[attrName] = {
      original: originalValue,
      rules: [],
      update: () => {} // placeholder
    };
  }

  elConditions[attrName].rules.push({
    maxWidth: targetSize,
    value: newAttributeValue
  });

  // Overwrite update function each time so it evaluates fresh
  elConditions[attrName].update = () => {
    const { rules, original } = elConditions[attrName];
    const rulesSorted = rules.slice().sort((a, b) => a.maxWidth - b.maxWidth);

    let applied = false;
    for (const rule of rulesSorted) {
      if (window.innerWidth <= rule.maxWidth) {
        element.setAttribute(attrName, rule.value);
        applied = true;
        break;
      }
    }
    if (!applied) {
      element.setAttribute(attrName, original);
    }
  };
}

function getAttributeNameFromSelector(selector) {
  const match = selector.match(/\[([\w-]+)\]/);
  return match ? match[1] : null;
}

function initAttrUpdaterFromHTML() {
  const updaterElements = document.querySelectorAll('[attr_size_changer]');
  updaterElements.forEach((el) => {
    const instructions = el.getAttribute('attr_size_changer');
    const matches = [...instructions.matchAll(/\(\s*'([^']+)'\s*,\s*(\d+)\s*,\s*'([^']+)'\s*\)/g)];

    matches.forEach(([, selector, size, value]) => {
      attr_size_changer(el, selector, parseInt(size), value);
    });
  });

  // Global update function for all elements
  function updateAllAttributes() {
    attrConditions.forEach(attrMap => {
      Object.values(attrMap).forEach(({ update }) => update());
    });
  }

  // Initial run
  updateAllAttributes();

  // Add resize listener
  window.addEventListener('resize', updateAllAttributes);
}

initAttrUpdaterFromHTML();
          



// =========================================

// Initialize all custom click events
function initCustomClickEvents() {
    // Find all buttons with event-class-click attribute
    const buttons = document.querySelectorAll('[event-class-click]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const eventId = this.getAttribute('event-class-click');
            const isToggle = this.getAttribute('event-toggle') === 'true';
            console.log('Button clicked with event-class-click:', eventId, 'Toggle:', isToggle);
            
            // Find all elements with matching eventid (original functionality)
            const targetElements = document.querySelectorAll(`[eventid="${eventId}"]`);
            console.log('Found target elements:', targetElements.length);
            
            targetElements.forEach(element => {
                const updateClasses = element.getAttribute('ev-do-update');
                
                if (updateClasses) {
                    // Store original class data if not already stored
                    if (!element.hasAttribute('origin-data')) {
                        element.setAttribute('origin-data', element.className);
                        console.log('Stored origin-data:', element.className);
                    }
                    
                    if (isToggle) {
                        // Toggle between updated and original classes
                        const currentClasses = element.className;
                        const originalClasses = element.getAttribute('origin-data');
                        
                        if (currentClasses === updateClasses) {
                            // Currently showing updated classes, revert to original
                            element.className = originalClasses;
                            console.log('Toggled back to original:', originalClasses);
                        } else {
                            // Currently showing original classes, apply update
                            element.className = updateClasses;
                            console.log('Toggled to updated:', updateClasses);
                        }
                    } else {
                        // No toggle, just update the class attribute
                        element.className = updateClasses;
                        console.log('Updated class to:', updateClasses);
                    }
                }
            });

            // NEW: Find all elements with event-id-list attribute
            const eventIdListElements = document.querySelectorAll('[event-id-list]');
            console.log('Found event-id-list elements:', eventIdListElements.length);
            
            eventIdListElements.forEach(element => {
                const eventIdListAttr = element.getAttribute('event-id-list');
                
                if (eventIdListAttr) {
                    try {
                        // Parse the JSON-like string - handle both single and double quotes
                        let jsonString = eventIdListAttr;
                        
                        // Replace single quotes with double quotes for valid JSON
                        jsonString = jsonString.replace(/'/g, '"');
                        
                        console.log('Original event-id-list string:', eventIdListAttr);
                        console.log('Converted JSON string:', jsonString);
                        
                        const eventIdList = JSON.parse(jsonString);
                        console.log('Parsed event-id-list:', eventIdList);
                        
                        // Check if the current eventId exists in the list
                        if (eventIdList.hasOwnProperty(eventId)) {
                            const targetClasses = eventIdList[eventId];
                            console.log('Found matching eventId:', eventId, 'with classes:', targetClasses);
                            
                            // Store original class data if not already stored (use a unique key for event-id-list)
                            const originKey = 'origin-data-' + eventId;
                            if (!element.hasAttribute(originKey)) {
                                element.setAttribute(originKey, element.className);
                                console.log('Stored origin data for', eventId, ':', element.className);
                            }
                            
                            if (isToggle) {
                                // Toggle between target classes and original classes
                                const currentClasses = element.className;
                                const originalClasses = element.getAttribute(originKey);
                                
                                if (currentClasses === targetClasses) {
                                    // Currently showing target classes, revert to original
                                    element.className = originalClasses;
                                    console.log('Toggled back to original:', originalClasses);
                                } else {
                                    // Currently showing original or other classes, apply target
                                    element.className = targetClasses;
                                    console.log('Toggled to target:', targetClasses);
                                }
                            } else {
                                // No toggle, just update the class attribute
                                element.className = targetClasses;
                                console.log('Updated class to:', targetClasses);
                            }
                        } else {
                            console.log('EventId', eventId, 'not found in event-id-list');
                        }
                    } catch (error) {
                        console.error('Error parsing event-id-list JSON:', error);
                        console.error('Original string:', eventIdListAttr);
                        
                        // Try alternative parsing method
                        try {
                            // Remove curly braces and split by comma
                            const cleanStr = eventIdListAttr.replace(/[{}]/g, '');
                            const pairs = cleanStr.split(',');
                            const eventIdList = {};
                            
                            pairs.forEach(pair => {
                                const [key, value] = pair.split(':');
                                if (key && value) {
                                    const cleanKey = key.trim().replace(/['"]/g, '');
                                    const cleanValue = value.trim().replace(/['"]/g, '');
                                    eventIdList[cleanKey] = cleanValue;
                                }
                            });
                            
                            console.log('Alternative parsing successful:', eventIdList);
                            
                            if (eventIdList.hasOwnProperty(eventId)) {
                                const targetClasses = eventIdList[eventId];
                                
                                const originKey = 'origin-data-' + eventId;
                                if (!element.hasAttribute(originKey)) {
                                    element.setAttribute(originKey, element.className);
                                }
                                
                                if (isToggle) {
                                    const currentClasses = element.className;
                                    const originalClasses = element.getAttribute(originKey);
                                    
                                    if (currentClasses === targetClasses) {
                                        element.className = originalClasses;
                                    } else {
                                        element.className = targetClasses;
                                    }
                                } else {
                                    element.className = targetClasses;
                                }
                            }
                        } catch (altError) {
                            console.error('Alternative parsing also failed:', altError);
                        }
                    }
                }
            });
        });
    });
}

// Debug function to show current state
function showDebugInfo() {
    const elements = document.querySelectorAll('[eventid], [event-id-list]');
    let debugInfo = 'Current state of all eventid and event-id-list elements:\n\n';
    
    elements.forEach((el, index) => {
        debugInfo += `Element ${index + 1}:\n`;
        debugInfo += `  eventid: ${el.getAttribute('eventid') || 'not set'}\n`;
        debugInfo += `  event-id-list: ${el.getAttribute('event-id-list') || 'not set'}\n`;
        debugInfo += `  current class: "${el.className}"\n`;
        debugInfo += `  ev-do-update: "${el.getAttribute('ev-do-update') || 'not set'}"\n`;
        debugInfo += `  origin-data: "${el.getAttribute('origin-data') || 'not set'}"\n\n`;
    });
    
    document.getElementById('debug-output').textContent = debugInfo;
}




// ✅ Safe init for defer-loaded script
document.addEventListener('DOMContentLoaded', () => {
    initCustomClickEvents();
    showDebugInfo(); // optional, pwede nimo tangtangon kung di needed
});



